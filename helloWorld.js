handlers.helloWorld = function (args)
{
    var userInfo = server.GetUserAccountInfo({
        PlayFabId: currentPlayerId
    });
    
    var message = "Args: " + args.name + ", ID: " + currentPlayerId + ", User: " + userInfo.UserInfo.Username;
    log.info(message);
    return { messageValue: message };
}

// update args.score if it's better 
handlers.postScore = function (args)
{
    var currentScore = server.GetPlayerStatistics({
        PlayFabId: currentPlayerId,
        StatisticNames: [
            "Score"
        ]
    }).Statistics[0].Value;
    
    var updated = false;
    var newScore = currentScore;
    if(args.score > currentScore)
        {
            server.UpdatePlayerStatistics({
                PlayFabId: currentPlayerId,
                Statistics: [ 
                    {
                        StatisticName: "Score",
                        Value: args.score
                    }
                ]
            });
            updated = true;
            newScore = args.score;
        }
    return { 
        newScore: newScore, 
        updated: updated
    }
}