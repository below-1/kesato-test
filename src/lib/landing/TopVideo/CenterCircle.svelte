<style>
  .VideoPlayer {
    background: url(/img/pages/home/img-video.png);
    background-position: center;
    transition: all;
  }

  .VideoPlayer:hover {
    transform: scale(1.1);
  }
</style>


<div 
  class="rounded-full border border-[#333] p-3 bg-ksblack overflow-hidden"
>
  <div 
    class="rounded-full border-[1px] border-[#555] p-3 bg-ksblack overflow-hidden"
  >
    <div class="VideoPlayer rounded-full h-48 w-48 flex items-center justify-center">
      <img
        src="/img/icons/play.png"
        alt="play button"
      />
    </div>
  </div>
</div>