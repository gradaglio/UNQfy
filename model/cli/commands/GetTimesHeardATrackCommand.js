class GetTimesHeardTrackACommand{
    execute (args, unqfy){
        unqfy.getTimesHeardATrack(parseInt(args[1]), parseInt(args[3]));
    }
}

module.exports = GetTimesHeardTrackACommand;