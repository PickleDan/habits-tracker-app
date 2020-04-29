// import jwtDecode from 'jwt-decode'
// export const checkToken = (token, now = Date.now() / 1000) => {
//     if (!token) return false
//     try {
//         const decoded = jwtDecode(token)
//         return decoded.iat < now && decoded.exp > now
//     } catch (e) {
//         return false
//     }
// }
