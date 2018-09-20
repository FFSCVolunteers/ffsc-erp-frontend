import axios from 'axios'

var SERVER = 'http://private-7e740-ffscerp.apiary-mock.com';

// if(process.env.NODE_ENV == 'development')
// {
//   SERVER = 'http://localhost:3000/'
// }

export default {

  getStatistic: function(year, month) {
  	return new Promise(async function(resolve, reject) {
  		var response = (await axios({url: SERVER + '/stats'+'?year='+year+'&month='+month, method: 'GET' }));
      if(response.data.error)
        alert(response.data.error_message);

		  resolve(response.data.data);
  	});
  },

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