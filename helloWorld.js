handlers.helloWorld = function (args)
{
    var userInfo = server.GetUserAccountInfo({
        PlayFabId: currentPlayerId
    });
    
    var message = "Args: " + args.name + "User: " + userInfo.Username;
    log.info(message);
    return { messageValue: message };
}