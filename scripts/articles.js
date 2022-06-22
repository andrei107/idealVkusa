
window.addEventListener('DOMContentLoaded', function() {

	//список советов
	class Article {
        constructor(name, src, txt, linked, parentSelector) {
			this.name=name;
            this.src = src;
            this.txt = txt;
			this.linked = linked;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
			element.className = "art";
            element.innerHTML = `
                <div class="articleBlock">
					<div class="imgArticle">
						 <img with="100%" height="100%" src=${this.src}>
					</div>
					<div class="shortArticleDescr">
						<div class="sad">
							<h2 class="nomeArticle">${this.name}</h2>
							<p class="txtArticle">${this.txt}</p>
						</div>	
						<div class="aa">
							<input type="button" class="btn btn-info" value="Читать далее" onclick="location.href = '${this.linked}';">
						</div>
					</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

new Article("Как выбрать вино?","/wp-content/uploads/img/vinoBig.png","В  наши дни искусство выбора вин большая редкость в обычной жизни, поскольку мы отвыкли от неторопливых семейных обедов с парадной сервировкой, а для праздничного стола покупаем вина в соответствии с личными предпочтениями, не учитывая особенностей меню. Вы удивитесь, насколько изменится ощущение от обеда, если запивать блюда правильно подобранным вином, как это делали гурманы во все времена.","http://idealvkusa.by/vino/",".newsAdvice").render();
new Article("Согреваемся в непогоду","/wp-content/uploads/img/coldBig.jpg","Зимой, пусть даже и такой жаркой, всегда так хочется тепла. А любой зимний вечер станет уютнее, если занять его приготовлением и распитием вкуснейших зимних напитков с любимыми и близкими людьми. Мы подобрали для вас несколько рецептов для приготовления напитков в домашних условиях и несколько адресов, где можно попробовать, как их готовят профессионалы.","http://idealvkusa.by/hot-drink/",".newsAdvice").render();
new Article("Факты о специях","/wp-content/uploads/img/speziaBig.jpg","Специи, зелень и приправы — лучшие вкусовые добавки, которые есть у нас на кухне. В любом виде приправа всегда прибавит некой изысканности всем нашим блюдам. Но что ты знаешь о специях, которые добавляешь в мясо или овощи? Мы решили подробнее изучить эту тему и поделиться найденными фактами.","http://idealvkusa.by/spezia/",".newsAdvice").render();
new Article("На чем не экономят на кухне?","/wp-content/uploads/img/kit.jpg","Организация кухни сравнима со сбором гардероба. И там, и там понадобится база. Это набор универсальных вещей, которые вы будете использовать в первую очередь. И если в плане одежды у каждого свои взгляды и запросы, то в готовке арсенал часто одинаковый. На нем как раз не стоит экономить.","http://idealvkusa.by/kitchen/",".newsAdvice").render();

});