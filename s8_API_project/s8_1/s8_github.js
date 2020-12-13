// part 1
class Github{
    constructor() {
        this.client_id = "GET_CLIENT_ID_AT_GITHUB";
        this.client_secret ="GET_CLIENT_SECRET_AT_GITHUB";

        // set count of repost to be called
        this.repos_count =5;
        this.repose_sort ="created: asc";
    }


// get user and its repo
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repose_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await  profileResponse.json();
        
        const repos = await  repoResponse.json();

        // return as object
        return{
            // profile : profile
            profile,
            repos
        }
    }
}