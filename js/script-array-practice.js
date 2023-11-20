//STEP 1
// let favmovie = ["Everything Everywhere All at Once", "Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption"]
// console.log(favmovie[1])
//STEP 2
// let favmovie = ["Everything Everywhere All at Once", "Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption"]
// let movies = new Array(5)
// for(let i=0; i<5; i++){
//     movies[i] = favmovie[i]
// }
// console.log(movies[0])
//STEP 3
// let favmovie = ["Everything Everywhere All at Once", "Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption"]
// let movies = new Array(5)
// for(let i=0; i<5; i++){
//     movies[i] = favmovie[i]
// }
// movies.splice(2,0,"movie")
// console.log(movies.length)
//STEP 4
// let movies = ["Everything Everywhere All at Once"]
// let favmovie = ["Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption"]
// for(let i=0; i<4; i++){
//       movies[i+1] = favmovie[i]
//    }
// delete movies[0]
// console.log(movies.toString())
//STEP 5
// let movies = ["Everything Everywhere All at Once"]
// let favmovie = ["Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption", "superman","batman"]
// for(let i=0; i<6; i++){
//       movies[i+1] = favmovie[i]
//    }
// for(let movie in movies){
//     console.log(movies[movie])
// }
//STEP 6
// let movies = ["Everything Everywhere All at Once"]
// let favmovie = ["Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption", "superman","batman"]
// for(let i=0; i<6; i++){
//       movies[i+1] = favmovie[i]
//    }
// for(let movie of movies){
//     console.log(movie)
// }
//STEP 7
// let movies = ["Everything Everywhere All at Once"]
// let favmovie = ["Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption", "superman","batman"]
// for(let i=0; i<6; i++){
//       movies[i+1] = favmovie[i]
//    }
//    movies.sort()
// for(let movie of movies){
//     console.log(movie)
// }
//STEP 8
// let movies = ["Everything Everywhere All at Once"]
// let favmovie = ["Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption", "superman","batman"]
// for(let i=0; i<6; i++){
//       movies[i+1] = favmovie[i]
//    }
// let leastFavMovies = ["bad Movie", "Worse Moive", "Worst Movie"]
// console.log("Movies I like: \n")
// for(let movie of movies){
//     console.log(movie)
// }

// console.log("\nMovies I regret watching: \n")
// for(let movie of leastFavMovies){
//     console.log(movie)
// }
//STEP 9
// let movies = ["Everything Everywhere All at Once"]
// let favmovie = ["Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption", "superman","batman"]
// for(let i=0; i<6; i++){
//       movies[i+1] = favmovie[i]
//    }
// let leastFavMovies = ["bad Movie", "Worse Moive", "Worst Movie"]
// let bothmov = movies.concat(leastFavMovies)
// bothmov.sort().reverse()
// for(let movie of bothmov){
//     console.log(movie)
// }


//STEP 10

// let movies = ["Everything Everywhere All at Once"]
// let favmovie = ["Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption", "superman","batman"]
// for(let i=0; i<6; i++){
//       movies[i+1] = favmovie[i]
//    }
// let leastFavMovies = ["bad Movie", "Worse Moive", "Worst Movie"]
// let bothmov = movies.concat(leastFavMovies)
// bothmov.sort().reverse()
//  console.log(bothmov[bothmov.length-1])
//STEP 11

// let movies = ["Everything Everywhere All at Once"]
// let favmovie = ["Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption", "superman","batman"]
// for(let i=0; i<6; i++){
//       movies[i+1] = favmovie[i]
//    }
// let leastFavMovies = ["bad Movie", "Worse Moive", "Worst Movie"]
// let bothmov = movies.concat(leastFavMovies)
// bothmov.sort().reverse()
//  console.log(bothmov[0])
//STEP 12
// let favmovie = ["Everything Everywhere All at Once","Chicken with Plums", "The Silence of the Lambs", "Fight Club", "Shawshank Redemption", "superman","batman"]
// let leastFavMovies = ["bad Movie", "Worse Moive", "Worst Movie"]
// let bothmov = favmovie.concat(leastFavMovies)
// for(movie in bothmov){
//     if(movie>6){
//         console.log(movie)
//     }
// }
//STEP 13
// let movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
// let letter = new Array()
// for(let movie of movies){
    
//     let l = movie.filter((item)=>{
//         return typeof item === 'string'
//     })
    
//     letter.push(l)

// }
// console.log(letter)

//STEP 14
// let employees = ['ZAK','JESSICA','MARK','FRED','SALLY']

// let a = function(array){
//     console.log("\nEmployees:\n")
//     for(let em of array){
//         console.log(em)
//     }
// }
// a(employees)


//STEP 15
// function filterValues(array){
//     return array.filter(function(a){
//         return a;
//       })
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
//STEP 16
// function random(arr){
//     console.log(arr[Math.floor(Math.random()*arr.length)])
    
// }
//STEP 17
// function largest(arr){

//         return Math.max(...arr)
// }

// console.log(largest([1,3,5,1]))