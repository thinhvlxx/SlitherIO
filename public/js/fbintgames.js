var FB_PREFIX = "<facebook>";

var FB_Leaderboard = 'big_snakes';

var isFBInstSDKReady = false;
var fbData = {};
// --- AD Params
var FB_AD_INTERSTATIAL = '332662577521462_335516980569355';
var FB_AD_REWARD_VIDEO = '332662577521462_337361397051580';

var isInterstitialPreloaded = false;
var isVideoAdPreloaded = false;

var isFriendInvited = false;

var preloadedInterstitial = null;
var preloadedVideoAd = null;

var challengeImgData = "";
var defeatImgData = "";
var inviteImgData = "";
var entryData = null;

var isDefeatContextPosted = false;
var isSessionDataSent = false;

function onFBStart() {
    /* FBInstant.initializeAsync().then(function() {


      isFBInstSDKReady = true;
      console.log(FB_PREFIX + "SDK Ready");

      

      if(isOnMobile)
      {
        if(!isInterstitialPreloaded)
         preloadFBInterstatial();
       if(!isVideoAdPreloaded)
        preloadRewardedVideoAd();
      }
      //FBInstant.setLoadingProgress(50);

      //F

      //FBInstant.startGameAsync().then(function() {
        //console.log("Assets loaded");
               
      //});
    }); */
}

function updateFBProgress(progress) {
    //FBInstant.setLoadingProgress(progress);
}

function updateFBAssetsLoaded() {


}

function getMyFBCloudData() {
    FBInstant.player
        .getDataAsync(['score'])
        .then(function(data) {
            var score = data['score'];
            console.log(FB_PREFIX + score);
            if (score == undefined || score == null) {
                score = 0;
                updateMyCloudData(score);
            }
            fbData.profile.score = score;
            myLongestLength = fbData.profile.score;
            if (isGameLoaded) {
                MenuScene.myLongestLength.text = myLongestLength;
            }
        });

}

function updateMyCloudData(score) {
    FBInstant.player
        .setDataAsync({
            score: score
        })
        .then(function() {
            console.log('data is set');
        });
}

function selectContext() {
    FBInstant.context.chooseAsync().then(function() {
        startGame();
    })
}


//------------ SOCIAL
function ShareOnFacebook(message) {
    var canvas = document.getElementsByTagName("canvas")[0];
    FBInstant.shareAsync({
            intent: 'SHARE',
            image: base64Picture,
            text: message,
            data: {
                myReplayData: '...'
            },
        })
        .then(function() {

        });
}

function InviteOnFacebook(message, intent) {
    console.log(FB_PREFIX + "invite called");
    FBInstant.shareAsync({
            intent: intent,
            image: base64Picture,
            text: message,
            data: {
                myReplayData: '...'
            },
        })
        .then(function() {});

}

// AD APIs ----
// ----------------
// ----------------

function preloadFBInterstatial() {
    FBInstant.getInterstitialAdAsync(
        FB_AD_INTERSTATIAL, // Your Ad Placement Id
    ).then(function(interstitial) {
        // Load the Ad asynchronously
        preloadedInterstitial = interstitial;
        return preloadedInterstitial.loadAsync();
    }).then(function() {
        console.log('Interstitial preloaded');
        isInterstitialPreloaded = true;
    }).catch(function(err) {
        console.error('Interstitial failed to preload: ' + err.message);
    });
}

function preloadRewardedVideoAd() {
    FBInstant.getRewardedVideoAsync(
        FB_AD_REWARD_VIDEO,
    ).then(function(rewardedVideo) {
        preloadedVideoAd = rewardedVideo;
        return preloadedVideoAd.loadAsync();
    }).then(function() {
        console.log('Video Ad preloaded');
        isVideoAdPreloaded = true;
    }).catch(function(err) {
        console.error('Video failed to preload: ' + err.message);
    });
}

function showFBInterstatial() {
    if (preloadedInterstitial == null)
        return;
    preloadedInterstitial.showAsync()
        .then(function() {
            console.log('Interstitial ad finished successfully');
            isInterstitialPreloaded = false;
        })
        .catch(function(e) {
            console.error(e.message);
        });
}

function showFBRewardedVideoAd() {
    if (preloadedVideoAd == null)
        return;
    preloadedVideoAd.showAsync()
        .then(function() {
            console.log('Interstitial ad finished successfully');
            isVideoAdPreloaded = false;
            ResumeGame();
        })
        .catch(function(e) {
            GameHudScene.onResumeTimeResumed();
        });
}



// LEADERBOARD ----
// ----------------
// ----------------
function getFBLeaderboard() {
    document.getElementById("leaderboard_frame").style.display = "block";
    var lbContent = document.getElementById("leaderboard_content");
    lbContent.innerHTML = '';
    if (!isFBInstSDKReady)
        return;
    FBInstant
        .getLeaderboardAsync(FB_Leaderboard)
        .then(leaderboard => leaderboard.getEntriesAsync(25, 0))
        .then(function(entries) {
            console.log(entries);
            populateLeaderboard(entries);
        })
        .catch(error => console.error(error));
}

function updateFbLeaderboard(score) {
    FBInstant
        .getLeaderboardAsync(FB_Leaderboard)
        .then(leaderboard => {
            return leaderboard.setScoreAsync(score);
        })
        .then(() => console.log('Score saved'))
        .catch(error => console.error(error));
}

function populateLeaderboard(entries) {
    var lbContent = document.getElementById("leaderboard_content");
    lbContent.innerHTML = '';
    var addHtml = '<ul>';
    entries.forEach(function(entry) {
        addHtml = addHtml + '<li>' +
            '<div class="graphic"><img src="' + entry.getPlayer().getPhoto() + '" alt=""></div>' +
            '<div class="name"><span class="header">' + entry.getPlayer().getName() + '</span><span class="stat">' + entry.getFormattedScore() + '</span><span class="sub">units</span></div>' +
            '</li>';
    });
    addHtml = addHtml + '</ul>';
    lbContent.innerHTML = addHtml;
}

function closeFBLeaderboard() {
    document.getElementById("leaderboard_frame").style.display = "none";
    var lbContent = document.getElementById("leaderboard_content");
    lbContent.innerHTML = '';
}



function grabInviteImage() {
    toDataURL(
        'invite.png', fbData.profile.name, '',
        function(dataUrl) {
            inviteImgData = dataUrl;
            sendInvite();
        });
}

function sendInvite() {
    if (fbData.contextId == null && !isFriendInvited) {
        FBInstant.context.chooseAsync().then(function(result) {
            FBInstant.updateAsync({
                action: 'CUSTOM',
                intent: 'INVITE',
                cta: 'Play Now',
                template: "biggest_snake",
                image: inviteImgData,
                text: "Help " + fbData.profile.name + " by playing the game",
                data: {},
                strategy: 'IMMEDIATE',
                notification: 'NO_PUSH'
            }).then(function() {
                console.log("Invite Sent");
                isFriendInvited = true;
                ResumeGame();
            });
        }).catch(function(err) {
            if (isGameStarted)
                GameHudScene.onResumeTimeResumed();
        });
    } else {
        if (isGameStarted)
            GameHudScene.onResumeTimeResumed();
    }

}

function grabChallengeImage() {
    toDataURL(
        'challenge.png', fbData.profile.name, fbData.profile.score,
        function(dataUrl) {
            challengeImgData = dataUrl;
            challengeYourFriend();
        });
}

function challengeYourFriend() {
    FBInstant.context.chooseAsync().then(function(result) {
        FBInstant.updateAsync({
            action: 'CUSTOM',
            intent: 'CHALLENGE',
            cta: 'Beat Now!',
            template: "biggest_snake",
            image: challengeImgData,
            text: "Is your snake bigger than mine, can you prove it?",
            data: {
                name: fbData.profile.name,
                score: fbData.profile.score,
                pic_url: fbData.profile.pic
            },
            strategy: 'IMMEDIATE',
            notification: 'NO_PUSH'
        }).then(function() {

        });
    }).catch(function(err) {
        console.error(err);
    });
}

function grabDefeatImage() {
    toDataURL(
        'defeat.png', fbData.profile.name, fbData.profile.score,
        function(dataUrl) {
            defeatImgData = dataUrl;
            updateDefeatToFriend();
        });
}

function updateDefeatToFriend() {
    if (isDefeatContextPosted)
        return;
    FBInstant.updateAsync({
        action: 'CUSTOM',
        intent: 'CHALLENGE',
        cta: 'Try Again',
        template: "biggest_snake",
        image: defeatImgData,
        text: "I have defeated you",
        data: {
            name: fbData.profile.name,
            score: fbData.profile.score,
            pic_url: fbData.profile.pic
        },
        strategy: 'IMMEDIATE',
        notification: 'NO_PUSH'
    }).then(function() {
        console.log("<Defeat Context> Updated");
        isDefeatContextPosted = true;
    });
}