(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?r.a.createElement(h,l(l({ref:t},b),{},{components:n})):r.a.createElement(h,l({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(128)),o={id:"index-import",title:"6. Import datasets",sidebar_label:"6. Import datasets",slug:"/howtos/moviesdatabase/import"},l={unversionedId:"howtos/Moviesdatabase/import/index-import",id:"howtos/Moviesdatabase/import/index-import",isDocsHomePage:!1,title:"6. Import datasets",description:"Sample Dataset",source:"@site/docs/howtos/Moviesdatabase/import/index-import.mdx",slug:"/howtos/moviesdatabase/import",permalink:"/howtos/moviesdatabase/import",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/Moviesdatabase/import/index-import.mdx",version:"current",sidebar_label:"6. Import datasets",sidebar:"docs",previous:{title:"5. Manage Index",permalink:"/howtos/moviesdatabase/manage"},next:{title:"7. Query Movies",permalink:"/howtos/moviesdatabase/querymovies"}},s=[{value:"Dataset Description",id:"dataset-description",children:[{value:"Movies",id:"movies",children:[]},{value:"Theaters",id:"theaters",children:[]},{value:"Users",id:"users",children:[]}]},{value:"Importing the Movies, Theaters and Users",id:"importing-the-movies-theaters-and-users",children:[]},{value:"Create Indexes",id:"create-indexes",children:[]}],b={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"sample-dataset"},"Sample Dataset"),Object(i.b)("p",null,"In the previous steps you used only a few movies, let's now import:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"More movies ",Object(i.b)("em",{parentName:"li"},"to discover more queries"),"."),Object(i.b)("li",{parentName:"ul"},"Theaters ",Object(i.b)("em",{parentName:"li"},"to discover the geospatial capabilities"),"."),Object(i.b)("li",{parentName:"ul"},"Users ",Object(i.b)("em",{parentName:"li"},"to do some aggregations"),".")),Object(i.b)("h2",{id:"dataset-description"},"Dataset Description"),Object(i.b)("h3",{id:"movies"},"Movies"),Object(i.b)("p",null,"The file ",Object(i.b)("inlineCode",{parentName:"p"},"sample-app/redisearch-docker/dataset/import_movies.redis")," is a script that creates 922 Hashes."),Object(i.b)("p",null,"The movie hashes contain the following fields."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"movie:id"))," : The unique ID of the movie, internal to this database (used as the key of the hash)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"title"))," : The title of the movie."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"plot"))," : A summary of the movie."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"genre"))," : The genre of the movie, for now a movie will only have a single genre."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"release_year"))," : The year the movie was released as a numerical value."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"rating"))," : A numeric value representing the public's rating for this movie."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"votes"))," : Number of votes."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"poster"))," : Link to the movie poster."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"imdb_id"))," : id of the movie in the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://imdb.com"}),"IMDB")," database.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"<details> \n  <summary>Sample Data: <b>movie:343</b></summary>\n  <table>\n      <thead>\n        <tr>\n            <th>Field</th>\n            <th>Value</th>\n        </tr>\n    </thead>\n  <tbody>\n    <tr>\n        <th>title</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Spider-Man\n        </td>\n    </tr>\n    <tr>\n        <th>plot</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"    When bitten by a genetically modified spider a nerdy shy and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"        </td>\n    </tr>\n    <tr>\n        <th>genre</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Action\n        </td>\n    </tr>\n    <tr>\n        <th>release_year</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        2002\n        </td>\n    </tr>\n    <tr>\n        <th>rating</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        7.3\n        </td>\n    </tr>\n    <tr>\n        <th>votes</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        662219\n        </td>\n    </tr>\n    <tr>\n        <th>poster</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg\n        </td>\n    </tr>\n    <tr>\n        <th>imdb_id</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        tt0145487\n        </td>\n    </tr>\n    <tbody>\n  </table>\n</details>\n")),Object(i.b)("h3",{id:"theaters"},"Theaters"),Object(i.b)("p",null,"The file ",Object(i.b)("inlineCode",{parentName:"p"},"sample-app/redisearch-docker/dataset/import_theaters.redis")," is a script that creates 117 Hashes (used for Geospatial queries). ",Object(i.b)("em",{parentName:"p"},"This dataset is a list of New York Theaters, and not movie theaters, but it is not that critical for this project ;).")),Object(i.b)("p",null,"The theater hashes contain the following fields."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"theater:id"))," : The unique ID of the theater, internal to this database (used as the key of the hash)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"name"))," : The name of the theater"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"address"))," : The street address"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"city"))," : The city, in this sample dataset all the theaters are in New York"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"zip"))," : The zip code"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"phone"))," : The phone number"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"url"))," : The URL of the theater"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"location"))," : Contains the ",Object(i.b)("inlineCode",{parentName:"li"},"longitude,latitude")," used to create the Geo-indexed field")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"<details> \n <summary>Sample Data: <b>theater:20</b></summary>\n  <table>\n      <thead>\n        <tr>\n            <th>Field</th>\n            <th>Value</th>\n        </tr>\n    </thead>\n  <tbody>\n    <tr>\n        <th>name</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Broadway Theatre\n        </td>\n    </tr>\n    <tr>\n        <th>address</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        1681 Broadway\n        </td>\n    </tr>\n    <tr>\n        <th>city</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        New York\n        </td>\n    </tr>\n    <tr>\n        <th>zip</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        10019\n        </td>\n    </tr>\n    <tr>\n        <th>phone</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        212 944-3700\n        </td>\n    </tr>\n    <tr>\n        <th>url</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        http://www.shubertorganization.com/theatres/broadway.asp\n        </td>\n    </tr>\n    <tr>\n        <th>location</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        -73.98335054631019,40.763270202723625\n        </td>\n    </tr>\n    <tbody>\n  </table>\n</details>\n")),Object(i.b)("h3",{id:"users"},"Users"),Object(i.b)("p",null,"The file ",Object(i.b)("inlineCode",{parentName:"p"},"sample-app/redisearch-docker/dataset/import_users.redis")," is a script that creates 5996 Hashes."),Object(i.b)("p",null,"The user hashes contain the following fields."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"user:id"))," : The unique ID of the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"first_name"))," : The first name of the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"last_name"))," : The last name of the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"email"))," : The email of the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"gender"))," : The gender of the user (",Object(i.b)("inlineCode",{parentName:"li"},"female"),"/",Object(i.b)("inlineCode",{parentName:"li"},"male"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"country"))," : The country name of the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"country_code"))," : The country code of the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"city"))," : The city of the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"longitude"))," : The longitude of the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"latitude"))," : The latitude of the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"last_login"))," : The last login time for the user, as EPOC time."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"ip_address"))," : The IP address of the user.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"<details> \n <summary>Sample Data: <b>user:3233</b></summary>\n  <table>\n      <thead>\n        <tr>\n            <th>Field</th>\n            <th>Value</th>\n        </tr>\n    </thead>\n  <tbody>\n    <tr>\n        <th>first_name</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Rosetta\n        </td>\n    </tr>\n    <tr>\n        <th>last_name</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Olyff\n        </td>\n    </tr>\n    <tr>\n        <th>email</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        rolyff6g@163.com\n        </td>\n    </tr>\n    <tr>\n        <th>gender</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        female\n        </td>\n    </tr>\n    <tr>\n        <th>country</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        China\n        </td>\n    </tr>\n    <tr>\n        <th>country_code</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        CN\n        </td>\n    </tr>\n    <tr>\n        <th>city</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Huangdao\n        </td>\n    </tr>\n    <tr>\n        <th>longitude</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        120.04619\n        </td>\n    </tr>\n    <tr>\n        <th>latitude</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        35.872664\n        </td>\n    </tr>\n    <tr>\n        <th>last_login</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        1570386621\n        </td>\n    </tr>\n    <tr>\n        <th>ip_address</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        218.47.90.79\n        </td>\n    </tr>\n    <tbody>\n  </table>\n</details>\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"importing-the-movies-theaters-and-users"},"Importing the Movies, Theaters and Users"),Object(i.b)("p",null,"Before importing the data, flush the database:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"> FLUSHALL\n")),Object(i.b)("p",null,"The easiest way to import the file is to use the ",Object(i.b)("inlineCode",{parentName:"p"},"redis-cli"),", using the following terminal command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ redis-cli -h localhost -p 6379 < ./sample-app/redisearch-docker/dataset/import_movies.redis\n\n$ redis-cli -h localhost -p 6379 < ./sample-app/redisearch-docker/dataset/import_theaters.redis\n\n\n$ redis-cli -h localhost -p 6379 < ./sample-app/redisearch-docker/dataset/import_users.redis\n\n")),Object(i.b)("p",null,"Using Redis Insight or the ",Object(i.b)("inlineCode",{parentName:"p"},"redis-cli")," you can look at the dataset:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> HMGET "movie:343" title release_year genre\n\n1) "Spider-Man"\n2) "2002"\n3) "Action"\n\n\n>  HMGET "theater:20" name location\n1) "Broadway Theatre"\n2) "-73.98335054631019,40.763270202723625"\n\n\n\n> HMGET "user:343" first_name last_name last_login\n1) "Umeko"\n2) "Castagno"\n3) "1574769122"\n\n')),Object(i.b)("p",null,"You can also use the ",Object(i.b)("inlineCode",{parentName:"p"},"DBSIZE")," command to see how many keys you have in your database."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"create-indexes"},"Create Indexes"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Create the ",Object(i.b)("inlineCode",{parentName:"strong"},"idx:movie")," index:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.CREATE idx:movie ON hash PREFIX 1 "movie:" SCHEMA title TEXT SORTABLE plot TEXT WEIGHT 0.5 release_year NUMERIC SORTABLE rating NUMERIC SORTABLE votes NUMERIC SORTABLE genre TAG SORTABLE\n\n"OK"\n')),Object(i.b)("p",null,"The movies have now been indexed, you can run the ",Object(i.b)("inlineCode",{parentName:"p"},'FT.INFO "idx:movie"')," command and look at the ",Object(i.b)("inlineCode",{parentName:"p"},"num_docs")," returned value. (should be 922)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Create the ",Object(i.b)("inlineCode",{parentName:"strong"},"idx:theater")," index:")),Object(i.b)("p",null,"This index will mostly be used to show the geospatial capabilties of RediSearch."),Object(i.b)("p",null,"In the previous examples we have created indexes with 3 types:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Text")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Numeric")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Tag"))),Object(i.b)("p",null,"You will now discover a new type of field: ",Object(i.b)("inlineCode",{parentName:"p"},"Geo"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"theater")," hashes contains a field ",Object(i.b)("inlineCode",{parentName:"p"},"location")," with the longitude and latitude, that will be used in the index as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.CREATE idx:theater ON hash PREFIX 1 "theater:" SCHEMA name TEXT SORTABLE location GEO\n\n"OK"\n')),Object(i.b)("p",null,"The theaters have been indexed, you can run the ",Object(i.b)("inlineCode",{parentName:"p"},'FT.INFO "idx:theater"')," command and look at the ",Object(i.b)("inlineCode",{parentName:"p"},"num_docs")," returned value. (should be 117)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Create the ",Object(i.b)("inlineCode",{parentName:"strong"},"idx:user")," index:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> FT.CREATE idx:user ON hash PREFIX 1 "user:" SCHEMA gender TAG country TAG SORTABLE last_login NUMERIC SORTABLE location GEO\n\n"OK"\n')))}c.isMDXComponent=!0}}]);