export let 
carousel1 =` <div
id="carouselExampleSlidesOnly"
class="carousel slide"
data-bs-ride="carousel"
> 
@if(images){

  <ngb-carousel
    class="carousel-inner"
    [interval]="2000"
    [showNavigationArrows]="false"
    [showNavigationIndicators]="false"
  >
  @for(image of images;track $index){

      <ng-template
        ngbSlide
        class="carousel-item active"
      >
        <img [src]="image" class="d-block w-100" alt="..." />
      </ng-template>
  }
</ngb-carousel>
}
</div>`,
carousel2 =`<div
id="carouselExampleControls"
class="carousel slide"
data-bs-ride="carousel"
>
@if(images){
<ngb-carousel
  class="carousel-inner"
  [interval]="2500"
  [showNavigationArrows]="true"
  [showNavigationIndicators]="false"
>
@for(image of images;track $index){
  <ng-template
    ngbSlide
  
    class="carousel-item active"
  >
    <img [src]="image" class="d-block w-100" alt="..." />
  </ng-template>
}
</ngb-carousel>
}
</div>`,
carousel3 =`  <div
id="carouselExampleIndicators"
class="carousel slide"
data-bs-ride="carousel"
>
@if(images){
<ngb-carousel
  class="carousel-inner"
  [interval]="1000"
  [showNavigationArrows]="false"
  [showNavigationIndicators]="true"
>
@for(image of images;track $index){
  <ng-template
    ngbSlide
    class="carousel-item"
  >
    <img [src]="image" class="d-block w-100" alt="..." />
  </ng-template>
}
</ngb-carousel>
}
</div>`,
carousel4 =`<div
id="carouselExampleCaptions"
class="carousel slide"
data-bs-ride="carousel"
>
@if(images){
<ngb-carousel
  class="carousel-inner"
  [interval]="2800"
  [showNavigationArrows]="true"
  [showNavigationIndicators]="false"
>
  <ng-template ngbSlide class="carousel-item">
    <img
      src="./assets/images/media/media-59.jpg"
      class="d-block w-100"
      alt="..."
    />
    <div class="carousel-caption d-none d-md-block">
      <h5 class="text-fixed-white">First slide label</h5>
      <p>
        Some representative placeholder content for the first slide.
      </p>
    </div>
  </ng-template>
  <ng-template ngbSlide class="carousel-item">
    <img
      src="./assets/images/media/media-60.jpg"
      class="d-block w-100"
      alt="..."
    />
    <div class="carousel-caption d-none d-md-block">
      <h5 class="text-fixed-white">Second slide label</h5>
      <p>
        Some representative placeholder content for the second slide.
      </p>
    </div>
  </ng-template>
  <ng-template ngbSlide class="carousel-item">
    <img
      src="./assets/images/media/media-61.jpg"
      class="d-block w-100"
      alt="..."
    />
    <div class="carousel-caption d-none d-md-block">
      <h5 class="text-fixed-white">Third slide label</h5>
      <p>
        Some representative placeholder content for the third slide.
      </p>
    </div>
  </ng-template>
</ngb-carousel>
}
</div>`,
carousel5 =`<div
id="carouselExampleFade"
class="carousel slide carousel-fade"
data-bs-ride="carousel"
>
@if(images2){
<ngb-carousel
  class="carousel-inner"
  [interval]="3200"
  [showNavigationArrows]="true"
  [showNavigationIndicators]="false"
>
@for(image of images2;track $index){
  <ng-template
    ngbSlide
    class="carousel-item"
  >
    <img [src]="image" class="d-block w-100" alt="..." />
  </ng-template>
}
</ngb-carousel>
}
</div>`,
carousel6 =` <div
id="carouselExampleInterval"
class="carousel slide"
data-bs-ride="carousel"
>
<ngb-carousel
  class="carousel-inner"
  [interval]="2800"
  [showNavigationArrows]="true"
  [showNavigationIndicators]="false"
>
  <ng-template ngbSlide class="carousel-item">
    <img
      src="./assets/images/media/media-40.jpg"
      class="d-block w-100"
      alt="..."
    />
  </ng-template>
  <ng-template ngbSlide class="carousel-item">
    <img
      src="./assets/images/media/media-41.jpg"
      class="d-block w-100"
      alt="..."
    />
  </ng-template>
  <ng-template ngbSlide class="carousel-item">
    <img
      src="./assets/images/media/media-42.jpg"
      class="d-block w-100"
      alt="..."
    />
  </ng-template>
</ngb-carousel>
</div>`,
carousel7 =`<div
id="carouselExampleControlsNoTouching"
class="carousel slide"
data-bs-touch="false"
data-bs-interval="false"
>
@if(images1){
<ngb-carousel
  class="carousel-inner"
  [interval]="2800"
  [showNavigationArrows]="true"
  [showNavigationIndicators]="false"
>
@for(image of images1;track $index){
  <ng-template
    ngbSlide
    class="carousel-item"
  >
    <img [src]="image" class="d-block w-100" alt="..." />
  </ng-template>
}
</ngb-carousel>
}
</div>`,
carousel8 =`<div
id="carouselExampleDark"
class="carousel slide"
data-bs-ride="carousel"
>
<ngb-carousel
  class="carousel-inner"
  [showNavigationArrows]="true"
  [showNavigationIndicators]="false"
>
  <ng-template ngbSlide class="carousel-item">
    <img
      src="./assets/images/media/media-63.jpg"
      class="d-block w-100"
      alt="..."
    />
    <div class="carousel-caption d-none d-md-block">
      <h5 class="text-fixed-white">First slide label</h5>
      <p class="op-7">
        Some representative placeholder content for the first slide.
      </p>
    </div>
  </ng-template>
  <ng-template ngbSlide class="carousel-item">
    <img
      src="./assets/images/media/media-64.jpg"
      class="d-block w-100"
      alt="..."
    />
    <div class="carousel-caption d-none d-md-block">
      <h5 class="text-fixed-white">Second slide label</h5>
      <p class="op-7">
        Some representative placeholder content for the second slide.
      </p>
    </div>
  </ng-template>
  <ng-template ngbSlide class="carousel-item">
    <img
      src="./assets/images/media/media-62.jpg"
      class="d-block w-100"
      alt="..."
    />
    <div class="carousel-caption d-none d-md-block">
      <h5 class="text-fixed-white">Third slide label</h5>
      <p class="op-7">
        Some representative placeholder content for the third slide.
      </p>
    </div>
  </ng-template>
</ngb-carousel>
</div>`;