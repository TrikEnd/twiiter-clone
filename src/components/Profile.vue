<template>
    <div id="app" class="flex container h-screen w-full">
      <!-- side nav -->
      <div class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
        <div>
          <button class="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue">
            <i class="fab fa-twitter"></i>
          </button>
          <div>
            <button v-for="tab in tabs" @click="id = tab.id" :class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${ id === tab.id ? 'text-blue' : ''}`">
              <i :class="`${ tab.icon } text-2xl mr-4 text-left`"></i>
              <p class="text-lg font-semibold text-left hidden lg:block"> {{ tab.title }} </p>
            </button>
          </div>
          <button class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue">
            <router-link to="/" class="hidden lg:block">Home</router-link>
            <i class="fas fa-plus lg:hidden"></i>
          </button>
        </div>
        <div class="lg:w-full relative">
          <button @click="dropdown = true" class="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none">
            <img src="profile.png" class="w-10 h-10 rounded-full border border-lighter" />
            <div class="hidden lg:block ml-4">
              <p class="text-sm font-bold leading-tight"> Patrik </p>
              <p class="text-sm leading-tight"> @TrikEnd </p>
            </div>
            <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
          </button>
          <div v-if="dropdown === true" class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
            <button @click="dropdown = false" class="p-3 flex items-center w-full hover:bg-lightest p-2 focus:outline-none">
              <img src="profile.png" class="w-10 h-10 rounded-full border border-lighter" />
              <div class="ml-4">
                <p class="text-sm font-bold leading-tight"> Patrik </p>
                <p class="text-sm leading-tight"> @TrikEnd </p>
              </div>
              <i class="fas fa-check ml-auto test-blue"></i>
            </button>
            <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
              Add an existing account
            </button>
            <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
              Log out @TrikEnd
            </button>
          </div>
        </div>
      </div>
      <!-- tweets -->
      
      <div class="p-relative h-screen" style="background-color: white;">
        <div class="flex justify-center">
            <header class="text-white h-12 py-4 h-auto">     
    <div>
         <div class="overflow-y-auto fixed h-screen pr-3">
    </div>
</div>
    </header>
        <main role="main">
             <div class="" style="width: 100%;">
                 <section class="" style="max-width:600px;">
<div>
    <div class="flex justify-start">
        <div class="px-4 py-2 mx-2">
            <a class=" text-2xl font-medium rounded-full text-blue-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                <svg class="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <g>
                        <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z">
                        </path>
                    </g>
                </svg>
            </a>
        </div>
        <div class="mx-2">
            <h2 class="mb-0 text-xl font-bold text-black">PatrikEM</h2>
            <p class="mb-0 w-48 text-xs text-gray-400">9,416 Tweets</p>
        </div>
    </div>
</div>

<!-- User card-->
<div>
    <div class="w-full bg-cover bg-no-repeat bg-center" style="height: 200px; background-image: url(bg.jpg);">
        <img class="opacity-0 w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200" alt="">
    </div>
    <div class="p-4">
        <div class="relative flex w-full">
            <!-- Avatar -->
            <div class="flex flex-1">
                <div style="margin-top: -6rem;">
                    <div style="height:9rem; width:9rem;" class="md rounded-full relative avatar">
                        <img style="height:9rem; width:9rem;" class="md rounded-full relative border-4 border-white" src="profile.png" alt="">
                        <div class="absolute"></div>
                    </div>
                </div>
            </div>
            <!-- Follow Button -->
            <div class="flex flex-col text-right">
                <button class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  rounded max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 hover:border-blue-800 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                    Edit Profile
                </button>
            </div>
        </div>
        <!-- Profile info -->
        <div class="space-y-1 justify-center w-full mt-3 ml-3">
            <!-- User basic-->
            <div>
                <h2 class="text-xl leading-6 font-bold text-black">PatrikEM</h2>
                <p class="text-sm leading-5 font-medium text-gray-600">@TrikEnd</p>
            </div>
            <!-- Description and others -->
            <div class="mt-3">

                <div class="text-gray-600 flex">
                    <span class="flex mr-2"><svg viewBox="0 0 24 24" class="h-5 w-5 paint-icon"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg><span class="leading-5 ml-1">Joined November, 2022</span></span>
                </div>
            </div>
            <div class="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
                <div class="text-center pr-3"><span class="font-bold text-black">520</span><span class="text-gray-600"> Following</span></div>
                <div class="text-center px-3"><span class="font-bold text-black">23,4m </span><span class="text-gray-600"> Followers</span></div>
            </div>
        </div>
    </div>
</div>
</section>
</div>
</main>
</div>
</div>


     <!-- trending -->
     <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
        <input class="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4" placeholder="Search Twitter" />
        <i class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>
        <div class="w-full rounded-lg bg-lightest">
          <div class="flex items-center justify-between p-3">
            <p class="text-lg font-bold">Trends for You</p>
            <i class="fas fa-cog text-lg text-blue"></i>
          </div>
          <button v-for="trend in trending" class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
            <div>
              <p class="text-xs text-left leading-tight text-dark"> {{ trend.top}} </p>
              <p class="font-semibold text-sm text-left leading-tight"> {{ trend.title}} </p>
              <p class="text-left text-sm leading-tight text-dark"> {{ trend.bottom}} </p>
            </div>
            <i class="fas fa-angle-down text-lg text-dark"></i>
          </button>
          <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
            Show More
          </button>
        </div>
        <div class="w-full rounded-lg bg-lightest my-4">
          <div class=" p-3">
            <p class="text-lg font-bold">Who to Follow</p>
          </div>
          <button v-for="friend in friends"  class="w-full flex hover:bg-lighter p-3 border-t border-lighter">
            <img :src="`${ friend.src }`" class="w-12 h-12 rounded-full border border-lighter" />
            <div class="hidden lg:block ml-4">
                <router-link class="text-sm font-bold leading-tight" to="/profileelon"> {{ friend.name }} </router-link>
      
              <p class="text-sm leading-tight"> {{ friend.handle }} </p>
              <p class="text-sm font-bold leading-tight"> {{ friends.name }} </p>
              <p class="text-sm leading-tight"> {{ friends.handle }} </p>
            </div>
            <button class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue">
              Follow
            </button>
          </button>
          <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
            Show More
          </button>
        </div>
        <router-view></router-view>
      </div>
   
    </div>
  
 
  </template>
  
  <script>

  
  export default {
    
    components: {
    
    },
    data() {
      return {
        tabs: [
          {icon: 'fas fa-home', title: 'Home', id:'home'},
          {icon: 'fas fa-hashtag', title: 'Explore', id: 'explore'},
          {icon: 'far fa-bell', title: 'Notifications', id: 'notifications'},
          {icon: 'far fa-envelope', title: 'Messages', id: 'messages'},
          {icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks'},
          {icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists'},
          {icon: 'far fa-user', title: 'Profile', id: 'profile'},
          {icon: 'fas fa-ellipsis-h', title: 'More', id: 'more'}
        ],
        id: 'home',
        dropdown: false,
        trending: [
          {top: 'Trending in TX', title: 'Gigi', bottom: 'Trending with: Rip Gigi'},
          {top: 'Music', title: 'We Won', bottom: '135K Tweets'},
          {top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets'},
          {top: 'Trending in Indonesia', title: 'Denim Day', bottom: '40k tweets'},
          {top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets'},
        ],
        friends: [
          {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy'},
          
        ],
        following: [
          {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '20 min', tweet: 'Should I just quarantine on mars??', comments: '1,000', retweets: '550', like: '1,000,003'},
          {src: 'kevin.jpg', name: 'Kevin Hart', handle: '@miniRock', time: '55 min', tweet: 'Should me and the rock do another sub-par movie together????', comments: '2,030', retweets: '50', like: '20,003'},
          {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Haha just made a flame thrower. Shld I sell them?', comments: '100,000', retweets: '1,000,002', like: '5,000,003'},
          {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Just did something crazyyyyyyy', comments: '100,500', retweets: '1,000,032', like: '5,000,103'}
        ],
        tweets: [
          {content: 'It is so nice outside!'}
        ],
        tweet: {content: ''}
      }
    },
    methods: {
      addNewTweet () {
        let newTweet = {
          content: this.tweet.content
        };
        this.tweets.push (newTweet)
      }
    }
  }
  </script>
  