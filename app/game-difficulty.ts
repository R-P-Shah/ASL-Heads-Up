//interface representing different game difficulties. Every game mode has different APIs and a difficulty
//This is the best way I could think of passing values over between pages
//and without needing to create different game pages, just one that can call
//the respective game difficulty's HTTP method to get stuff from their respective API's because they do 
//it all differently
export interface GameDifficulty {
    difficulty: string;
    api: string;

    //TODO
    //write method for getting JSON objects from API call
}
