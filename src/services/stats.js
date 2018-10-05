import axios from 'axios'

var SERVER = 'http://localhost:3000';

// if(process.env.NODE_ENV == 'development')
// {
//   SERVER = 'http://localhost:3000/'
// }

export default {

  getStatistic: function(center_id, year, month) {
    // axios.defaults.headers.common['x-auth'] = 'meOuLuOuo2eGjdrOOzPtLrEgPvS2tfuA'

  	return new Promise(async function(resolve, reject) {
      try {
  		  var response = (await axios({url: SERVER + '/stats/'+center_id+'/'+month+'/'+year, method: 'GET' }));
        resolve(response.data);
      }

		  catch(err) {
        resolve({});
      }
  	});
  },

  submitStatistics: function(center_id, year, month, stats) {
    // axios.defaults.headers.common['x-auth'] = 'meOuLuOuo2eGjdrOOzPtLrEgPvS2tfuA';

    return new Promise(async function(resolve, reject) {
      var data = {
        center_id,
        year,
        month, 
        stats
      };

      var response = (await axios({url: SERVER + '/stats', method: 'PUT', data: data }));
      resolve(response.data);
    });
  }

  // getVideo: function(video_id) {
  //   return new Promise(async function(resolve, reject) {
  // 		var response = (await axios({url: SERVER + '/videos/'+video_id, method: 'GET' }));
		// resolve(response.data);
  // 	});
  // },

  // constructVideoUrl: function(video) {
  // 	return SERVER + '/uploads/' + video.filename;
  // }
}