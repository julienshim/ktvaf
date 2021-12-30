title = '';

if (document.querySelector('.TitleHeader__TitleText-sc-1wu6n3d-0')) {
    title = document.querySelector('.TitleHeader__TitleText-sc-1wu6n3d-0').textContent;
}

documentURL = '';

if (document.URL) {
    documentURL = document.URL.match(/https:\/\/www.imdb.com\/title\/(tt[0-9]*)/)[0]
}

genres = '';

if ([...document.querySelectorAll('li[data-testid="storyline-genres"] div ul li a')]) {
    genres = [...document.querySelectorAll('li[data-testid="storyline-genres"] div ul li a')].map(x => x.textContent).join(', ');
}

year = '';

if([...document.querySelectorAll('div.TitleBlock__TitleContainer-sc-1nlhx7j-1 div ul li span')]) {
    year = [...document.querySelectorAll('div.TitleBlock__TitleContainer-sc-1nlhx7j-1 div ul li span')].map(s => s.textContent)[0];
}

type = document.querySelector('.ipc-inline-list > li').textContent === 'TV Series' || numberOfEpisodes !== 'N/A' ? 'TV Series' : 'Film';

numberOfEpisodes = 'N/A'

if (type === 'TV Series' || document.querySelector('div[data-testid="episodes-header"] a h3 span')) { 
    numberOfEpisodes = document.querySelector('div[data-testid="episodes-header"] a h3 span').textContent;
}

runtime = '';

if (document.querySelector('li[data-testid="title-techspec_runtime"] div')) {
    runtime = document.querySelector('li[data-testid="title-techspec_runtime"] div').textContent;
};

plot = '';

if (document.querySelector('span[data-testid="plot-l"]')) {
    plot = document.querySelector('span[data-testid="plot-l"]').textContent;
}

results = [title, documentURL, plot, type, numberOfEpisodes, runtime, year, genres].join('\t')

copy(results)