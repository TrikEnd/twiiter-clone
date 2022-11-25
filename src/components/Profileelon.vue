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
              <p class="text-sm font-bold leading-tight"> PatrikEM </p>
              <p class="text-sm leading-tight"> @TrikEnd </p>
            </div>
            <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
          </button>
          <div v-if="dropdown === true" class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
            <button @click="dropdown = false" class="p-3 flex items-center w-full hover:bg-lightest p-2 focus:outline-none">
              <img src="profile.png" class="w-10 h-10 rounded-full border border-lighter" />
              <div class="ml-4">
                <p class="text-sm font-bold leading-tight"> PatrikEM </p>
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
              
              <router-link class="" to="/">⇦</router-link>
              
            </a>
        </div>
        <div class="mx-2">
            <h2 class="mb-0 text-xl font-bold text-black">Elon Musk</h2>
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
                        <img style="height:9rem; width:9rem;" class="md rounded-full relative border-4 border-white" src="elon.jpg" alt="">
                        <div class="absolute"></div>
                    </div>
                </div>
            </div>
            <!-- Follow Button -->
            <div class="flex flex-col text-right">
                <button class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  rounded max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 hover:border-blue-800 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                    Follow
                </button>
            </div>
        </div>
        <!-- Profile info -->
        <div class="space-y-1 justify-center w-full mt-3 ml-3">
            <!-- User basic-->
            <div>
                <h2 class="text-xl leading-6 font-bold text-black">Elon Musk</h2>
                <p class="text-sm leading-5 font-medium text-gray-600">@teslaBoy</p>
            </div>
            <!-- Description and others -->
            <div class="mt-3">

                <div class="text-gray-600 flex">
                    <span class="flex mr-2"><svg viewBox="0 0 24 24" class="h-5 w-5 paint-icon"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg><span class="leading-5 ml-1">Joined November, 2022</span></span>
                </div>
            </div>
            <div class="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
                <div class="text-center pr-3"><span class="font-bold text-black">100</span><span class="text-gray-600"> Following</span></div>
                <div class="text-center px-3"><span class="font-bold text-black">100.000 </span><span class="text-gray-600"> Followers</span></div>
            </div>
        </div>
    </div>
</div>
</section>

 <!--second tweet-->
 <article class="hover:bg-white transition duration-350 ease-in-out">
    <div class="flex flex-shrink-0 p-4 pb-0">
        <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
                <div>
                    <img class="inline-block h-10 w-10 rounded-full" src="elon.jpg" alt="">
                </div>
                <div class="ml-3">
                    <p class="text-base leading-6 font-medium text-black">
                        Elon Musk
                        <span class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                            @teslaBoy  . 16 April
                        </span>
                    </p>
                </div>
            </div>
        </a>
    </div>


    <div class="pl-3  ">
        <p class="text-base width-10 font-medium text-black flex-shrink">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum iure corrupti asperiores incidunt, id veritatis quibusdam quaerat nostrum quod.
            
        </p>

        <div class="md:flex-shrink pr-6 pt-3">
            <div class="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style="height: 200px; background-image: url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80);">
            <img class="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80" alt="">
        </div>
        </div>


        <div class="flex items-center py-4">
            <div class="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg>
              12.3 k
            </div>
            <div class="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                </g>
              </svg>
              14 k
            </div>
            <div class="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                </g>
              </svg>
              14 k
            </div>
            <div class="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                  <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                </g>
              </svg>
            </div>
          </div>

    </div>
    <hr class="border-gray-800">
</article> <!--second tweet-->
                    <article class="hover:bg-white transition duration-350 ease-in-out">
    <div class="flex flex-shrink-0 p-4 pb-0">
        <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
                <div>
                    <img class="inline-block h-10 w-10 rounded-full" src="elon.jpg" alt="">
                </div>
                <div class="ml-3">
                    <p class="text-base leading-6 font-medium text-black">
                        Elon Musk
                        <span class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                            @teslaBoy  . 16 April
                        </span>
                    </p>
                </div>
            </div>
        </a>
    </div>


    <div class="pl-3  ">
        <p class="text-base width-10 font-medium text-black flex-shrink">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum iure corrupti asperiores incidunt, id veritatis quibusdam quaerat nostrum quod.
            
        </p>

        <div class="md:flex-shrink pr-6 pt-3">
            <div class="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style="height: 200px; background-image: url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80);">
            <img class="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80" alt="">
        </div>
        </div>


        <div class="flex items-center py-4">
            <div class="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg>
              12.3 k
            </div>
            <div class="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                </g>
              </svg>
              14 k
            </div>
            <div class="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                </g>
              </svg>
              14 k
            </div>
            <div class="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                  <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                </g>
              </svg>
            </div>
          </div>

    </div>
    <hr class="border-gray-800">
</article>
</div>
</main>
</div>
</div>


      <!-- trending -->
      <div class="md:block hidden w-2/3 h-full border-l border-lighter py-2 px-6  relative">
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
          <button v-for="friend in friends" class="w-full flex hover:bg-lighter p-3 border-t border-lighter">
            <img :src="`${ friend.src }`" class="w-12 h-12 rounded-full border border-lighter" />
            <div class="hidden lg:block ml-4">
              <p class="text-sm font-bold leading-tight"> {{ friend.name }} </p>
              <p class="text-sm leading-tight"> {{ friend.handle }} </p>
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
  