const { verifyArtist } = require('../unqfyService');
const {ARTIST_DOESNT_EXIST_ERROR} = require('../exceptions');

function verifyArtistIdMiddleware() {
  return (req, res, next) => {
    verifyArtist(+req.body.artistId)
      .then(() => next())
      .catch((err) => next(artistDoesntExistError()));
  };
}

function artistDoesntExistError(){
  return {
    type: ARTIST_DOESNT_EXIST_ERROR
  };
}

module.exports = {verifyArtistIdMiddleware};