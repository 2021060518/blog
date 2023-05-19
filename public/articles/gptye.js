var data = JSON.stringify({
    "messages": [
       {
          "role": "user",
          "content": "查询填写的 Key 的余额。"
       }
    ],
    "key": "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",
    "temperature": 0.6,
    "password": "",
    "model": "gpt-3.5-turbo"
 });
 
 var xhr = new XMLHttpRequest();
 xhr.withCredentials = true;
 
 xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
       console.log(this.responseText);
    }
 });
 
 xhr.open("POST", "https://vercel-chatgpt-github.vercel.app/api");
 xhr.setRequestHeader("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
 xhr.setRequestHeader("Content-Type", "application/json");
 xhr.setRequestHeader("Accept", "*/*");
 xhr.setRequestHeader("Host", "vercel-chatgpt-github.vercel.app");
 xhr.setRequestHeader("Connection", "keep-alive");
 
 xhr.send(data);