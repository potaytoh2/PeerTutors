index.js api endpoints

HTTP POST http://localhost:3001/upload-audio
body: form-data
{
  audio: audio file
  topic: Diffusion
}
response:
200
{
    "result": false,
    "message": "Audio does not match the topic Diffusion and is not valid"
}
200
{
    "result": true,
    "message": "Audio matches the topic Osmosis and is valid"
}


HTTP GET http://localhost:3001/file
body: raw json
{
  filename: rose.png
}
response:
{
  live link to image
}