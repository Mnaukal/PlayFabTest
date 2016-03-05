handlers.helloWorld = function (args)
{
    var userInfo = server.GetUserAccountInfo({
        PlayFabId: currentPlayerId
    });
    
    var message = "Args: " + args.name + "User: " + userInfo.Username;
    log.info(message);
    return { messageValue: message };
}

// update args.score if it's better 
handlers.postScore = function (args)
{
    var currentScore = server.GetPlayerStatistics({
        PlayFabId: currentPlayerId,
        StatisticNames: ["score"]
    }).Statistics[0];
    
    var updated = false;
    if(args.score > currentScore)
        {
            server.UpdatePlayerStatistics({
                PlayFabId: currentPlayerId,
                Statistics: [
                    StatisticName: "Score",
                    Value: args.score
                ]
            });
            updated = true;
        }
    return { 
        newScore: args.score, 
        updated: updated
    }
}