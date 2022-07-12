import axios from 'axios';
import moment from 'moment';

export const Config = {
  baseUrl:"http://localhost:8080/",
  imageUrl:"https://www.ten11kh.com/image/product_image_path/", 
  baseUrlStore:"https://ten11kh.com:10010/forced_update_url_m1gfn", //url to get config from api grails. example:(store url(android store, app store,galary store))
  token_rgi : "578393E96709E9033FD2043D5CE1EE225DE7C6777216B4ED37D07B46243111C2", // token static to data from api
  iosVersion:1, 
  androidVersion:1,
  appVersion:"1",
  isGalaryApk:false, 
}

export const post = (url = '', param = {}) => {
    return axios({method: 'POST', url: Config.baseUrl + url, data: param}).then((res) => {
        if (res != undefined) {
          return res.data;
        } else {
          return false;
        }
    }).catch((err) => {
        return false;
    });
};
// export const postOtherApi = (url = '', param = {}) => {
//   return axios({method: 'POST', url: url, data: param}).then((res) => {
//       if (res != undefined) {
//         return res.data;
//       } else {
//         return false;
//       }
//   }).catch((err) => {
//       return false;
//   });
// };
// export const postWithToken = (
//   url = '',
//   param = {},
//   props = {},
// ) => {
//   var headers = {}
//   var token = null;
//   if(props.profileReducer.isLogin){
//     token = props.profileReducer.profile.access_token;
//     headers={
//       Authorization: `Bearer ${token}`,
//     }
//   }

//   return axios({method: 'POST',url: Config.baseUrl + url,data: param, headers: headers}).then((res) => {
//     if (res) { return res.data; }
//   }).catch((er) => {
//     if(er.response && er.response.status){
//       var status = er.response.status;
//       if(props.dispatch != undefined){
//         if(status == 401){
//           return refreshToken(url,param,props)
//         }else if(status == 405){
//           // props.dispatch({type:SET_IS_API_ERROR,payload: true });
//         }else if(status == 404){
//           // axios({method: 'POST', url: baseUrlStore, data: {}}).then((res) => {
//           //   if (res != undefined) {
//           //     var data = res.data;
//           //     props.dispatch({type:SET_STORE_URL,payload: data.config_dynamic_text });
//           //     setTimeout(() => {
//           //       props.dispatch({type:SET_IS_ROUT_NOT_FOUND,payload: true });
//           //     }, 200);
//           //   }
//           // }).catch((err) => {
//           //   return false;
//           // });
        
//         }else if(status == 500){
//           // props.dispatch({type:SET_IS_INTERNAL_ERROR,payload: true });
//         }
//         return false;
//       }
//     }else{
//       // NetInfo.fetch().then(state => {
//       //   if(props.dispatch != undefined && state.isConnected){
//       //     props.dispatch({type:SET_IS_SEVER_NOT_FOUND,payload: true });
//       //   }
//       // });
//     }
//     return false;
//   });
// };
// const refreshToken = (url = '',param ={}, props = {}) => {
//   var formData = new FormData();
//   formData.append('grant_type', 'refresh_token');
//   formData.append('refresh_token', props.profileReducer.profile.refresh_token);
//   return axios({
//     method: 'POST',
//     url: Config.baseUrl + 'oauth/access_token',
//     data: formData,
//     headers: {'Content-Type': 'multipart/form-data'},
//   }).then((res) => {
//       if(props.dispatch != undefined){
//         props.dispatch({
//           type: "FETCH_PROFILE",
//           payload: res.data,
//         });
//       }else{
//         alert("miss function refresh token")
//         // props.fetchLoginSuccess(res.data);
//       }
//       var propsTmp = {
//         ...props,
//         profileReducer:{
//           ...props.profileReducer,
//           profile:res.data
//         }
//       }
//       return postWithToken(url, param, propsTmp);
//   }).catch((err) => {
//     props.dispatch({
//       type:"LOGOUT"
//     })
//     return false;
//   });
// };
// export const isHasPermission = permissionName => {
//   var roles = this.props.userRole;
//   for (var i = 0; i <= roles.length; i++) {
//     if (roles[i] === permissionName) return true;
//   }
//   return false;
// }
// export const handleGlobalLogin = (username, password) => {
//   var data = {
//     username: username,
//     password: password,
//   };
//   return post("api/login",data).then(res=>{
//       return res;
//   })
//   // return this.fetch(this.props.baseUrl + 'api/login', 'POST', data).then(res => {
//   //     if (res[CONFIG.AccessTokenTypeKey]) {
//   //       this.props.dispatch(getUserRole(res.roles));
//   //       this.props.dispatch(getToken(res[CONFIG.AccessTokenKey]));
//   //       this.props.dispatch(getRefreshToken(res[CONFIG.RefreshTokenKey]));
//   //       this.props.dispatch(userLogout(false));
//   //       this.stopDisconnetToken();
//   //       return res;
//   //     }
//   //   },
//   // );
// }
// export const formatNumber1 = (number, isCurrency) => {
//   if(number == ""){
//     return null;
//   }
//   number = Number(number);
//   if (isCurrency) {
//     if (number < 0) {
//       return (
//         '-US $' +
//         Math.abs(number)
//           .toFixed(2)
//           .replace(/\d(?=(\d{3})+\.)/g, '$&,')
//       );
//     } else if (number === undefined || number === null || number === 0) {
//       return 'US $0';
//     } else return 'US $' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//   } else {
//     if (number === undefined || number === null || number === 0) {
//       return '0';
//     } else {
//       return number.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,');
//     }
//   }
// };
// export const formatNumber = (number, isCurrency) => {
//   if (isCurrency) {
//     if (number < 0) {
//       return (
//         '-$' +
//         Math.abs(number)
//           .toFixed(2)
//           .replace(/\d(?=(\d{3})+\.)/g, '$&,')
//       );
//     } else if (number === undefined || number === null || number === 0) {
//       return '$0.00';
//     } else return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//   } else {
//     if (number === undefined || number === null || number === 0) return '0';
//     else return number.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,');
//   }
// };
export const isEmpty = (obj) => {
  if (obj == null || obj == undefined || obj == "") return true;
  if (obj.length > 0) return false;
  // if (obj.length === 0) return true;
  if (typeof obj !== 'object') return true;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
};

// export const isEmail = (email) => {
//   const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
//   return expression.test(String(email).toLowerCase());
// };
export const formateDate = (date) => {
  if(!isEmpty(date)){
    return moment(date).format('YYYY-MM-DD')
  }
  return 
}
export const formateDateClient = (date) => {
  if(!isEmpty(date)){
    return moment(date).format('DD/MM/YYYY')
  }
  return 
}
export const formateDateServer = (date) => {
  if(!isEmpty(date)){
    return moment(date).format('DD-MM-YYYY')
  }
  return 
}