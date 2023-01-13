const KEY = "977987a8fd8948cb8d6616a49adb317d";

const section = document.querySelector("#listaDeNoticias");

async function getNews(){
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=br`, {
        method: "GET",
        headers: {
            Authorization: KEY
        }
    });

    const data = await res.json()

   data.articles.forEach(element => {
    const cardNews = `<article class="col-6">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${element.urlToImage}"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  ${element.title}
                </h5>
                <p class="card-text">
                  ${element.description}
                </p>
                <a
                  href="${element.url}"
                  class="btn btn-primary"
                  >Ir para noticia</a
                >
              </div>
            </div>
          </div>
        </div>
      </article>`

      section.innerHTML += cardNews
   });
}

getNews();