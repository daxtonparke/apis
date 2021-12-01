https://swapi.dev/api/people/4
202

https://swapi.dev/api/planets/2
"population": "2000000000"

https://swapi.dev/api/starships/10
"manufacturer": "Corellian Engineering Corporation",

https://swapi.dev/api/people/2
https://swapi.dev/api/species/2
"name": "Droid"

https://swapi.dev/api/people/10
"https://swapi.dev/api/films/1/","A New Hope"
"https://swapi.dev/api/films/2/","The Empire Strikes Back"
"https://swapi.dev/api/films/3/","Return of the Jedi"
"https://swapi.dev/api/films/4/","The Phantom Menace"
"https://swapi.dev/api/films/5/","Attack of the Clones"
"https://swapi.dev/api/films/6/","Revenge of the Sith"

https://swapi.dev/api/starships/?search=Millennium Falcon

1
https://practiceapi.devmountain.com/api/posts
'requires body
{
    "id": 0,
    "text": "Hello world!",
    "date": "11 Jan 2018"
  }'

2
https://practiceapi.devmountain.com/api/posts
array

3
https://practiceapi.devmountain.com/api/posts/555

4
https://practiceapi.devmountain.com/api/posts/filter?text={text}
200
409

5
https://practiceapi.devmountain.com/api/posts/289
{
    "text": "DAX:)"
  }

6
Put
https://practiceapi.devmountain.com/api/posts?id=289
{
    "text": "black"
  }

7
https://practiceapi.devmountain.com/api/posts/filter?text=blue

8
application/json;
 charset=utf-8

 9
Request was missing req.query.id

10
ignores query
