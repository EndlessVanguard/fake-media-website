const fs = require('fs');
const path = require('path');

const app = require("express")()

const appConfig = {
  apiToken: "849353fggresg5e84ja"
}

app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to my newspaper.</h1>
<br/>
The worst news source ever since 2016
      <h2>Latest news</h2>
      <ul>
<li>
<a href='/article/231-bitcoin-company-frees-us-from-the-terror-of-advertising'>
Bitoin Company Frees us from the Terror of Advertising
</a>
</li>

<li>
<a href='/article/9gjd-12-listicles-that-will-have-you-clicking-for-ad-cash'>
12 listicles that will have you clicking for ad cash
</a>
</li>
      </ul>
`
          )
});

app.get("/article/:articleId", (req, res) =>{
  const apiToken = appConfig.apiToken
  const contentId = req.params.articleId

  const clientSideScript = fs.readFileSync(path.resolve(__dirname, '../../bitcoin-remunerate-web/dist/client.js'), 'utf8');

  res.send(`
<h1>Bitoin Company Frees us from the Terror of Advertising</h1>
<p><em>12 cat pictures that will change your life forever</em></p>
<div id=remunerate-content >
<script>
(${clientSideScript})("${apiToken}", "${contentId}");
</script>
</div>
`)
})


app.listen(4000, () => {
  console.log("App running on port 3000")
})
