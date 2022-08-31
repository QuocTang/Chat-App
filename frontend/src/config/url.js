const URL_CLOUDINARY = "https://api.cloudinary.com/v1_1/dohex0rdu/image/upload";
let URL_API = "";
let url = "";

const environment = "local";

if (environment === "local") {
  url = "http://localhost:5000";
} else if (environment === "proc") {
  url = "https://api-chat-app-socket.herokuapp.com";
}

URL_API = url;

export { URL_CLOUDINARY, URL_API };
