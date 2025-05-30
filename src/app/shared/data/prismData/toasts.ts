export let toasts1 = ` <div class="card-body livetoastbody">
<button
  type="button"
  class="btn btn-primary btn-wave"
  id="liveToastBtn"
  (click)="showToast()"
  >
  Show live toast
</button>
<div class="toast-container position-fixed top-0 end-0">
  @for (toast of toasts; track toast) {
    <ngb-toast
      [delay]="5000"
      [autohide]="toast.autohide"
      (hide)="hideToast(toast)"
      [class.bg-warning]="!toast.autohide"
      class="text-default"
      >
      <ng-template ngbToastHeader >
          <img
            class="bd-placeholder-img rounded me-2"
            src="./assets/images/brand-logos/favicon.ico"
            alt="Your Image"
            />
            <strong class="me-auto text-default">scifi</strong>
            <small>11 mins ago</small>
      </ng-template>
      Hello, world! This is a toast message
      </ngb-toast>
    }
  </div>
</div>`,
toasts2 = ` @if (show11) {
  <ngb-toast class="toast align-items-center text-bg-primary  border-0 mb-4" [autohide]="false">
    <div
      class="align-items-center show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-autohide="false"
      >
      <div class="d-flex">
        <div class="text-fixed-white">
          Hello, world! This is the Primary toast message
        </div>
        <button
          aria-label="Close"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          (click)="show11 = false"
          >
          <span aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </ngb-toast>
}

@if (show12) {
  <ngb-toast class="toast align-items-center text-bg-secondary border-0  mb-4" [autohide]="false">
    <div
      class="align-items-center show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-autohide="false"
      >
      <div class="d-flex">
        <div class="text-fixed-white">
          Hello, world! This is the Secondary toast message
        </div>
        <button
          aria-label="Close"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          (click)="show12 = false"
          >
          <span aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </ngb-toast>
}
@if (show13) {
  <ngb-toast class="toast align-items-center text-bg-success border-0  mb-4" [autohide]="false">
    <div
      class="align-items-center show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-autohide="false"
      >
      <div class="d-flex">
        <div class="text-fixed-white">
          Hello, world! This is the Success toast message
        </div>
        <button
          aria-label="Close"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          (click)="show13 = false"
          >
          <span aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </ngb-toast>
}
@if (show14) {
  <ngb-toast class="toast align-items-center text-bg-info border-0 fade show" [autohide]="false">
    <div
      class="align-items-center show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-autohide="false"
      >
      <div class="d-flex">
        <div class="text-fixed-white">
          Hello, world! This is the Info toast message
        </div>
        <button
          aria-label="Close"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          (click)="show14 = false"
          >
          <span aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </ngb-toast>
}`,
toasts3 = `@if (show) {
  <ngb-toast [autohide]="false" (hidden)="show = false">
    <ng-template ngbToastHeader>
      <div class="me-auto d-flex justify-content-between w-100">
        <div class="d-flex text-default">
          <img
            class="bd-placeholder-img rounded me-2"
            src="./assets/images/brand-logos/favicon.ico"
            alt="..."
            />
            <strong class="tx-14 mg-b-0 mg-r-auto">scifi</strong>
          </div>
          <div class="d-flex">
            <small class="text-muted me-2 lh-lg">11 mins ago</small>
          </div>
        </div>
      </ng-template>
      Hello, world! This is a toast message.
    </ngb-toast>
  }`,
toasts4 = `  <div class="toast-container position-static">
@if (show7) {
  <ngb-toast [autohide]="false" (hidden)="show7 = false">
    <ng-template ngbToastHeader>
      <div class="me-auto d-flex justify-content-between w-100">
        <div class="d-flex text-default">
          <img
            class="bd-placeholder-img rounded me-2"
            src="./assets/images/brand-logos/favicon.ico"
            alt="..."
            />
            <strong class="tx-14 mg-b-0 mg-r-auto">scifi</strong>
          </div>
          <div class="d-flex ms-auto">
            <small class="text-muted me-2 lh-lg">just now</small>
          </div>
        </div>
      </ng-template>
      See? Just like this.
    </ngb-toast>
  }

  @if (show8) {
    <ngb-toast [autohide]="false" (hidden)="show8 = false">
      <ng-template ngbToastHeader>
        <div class="me-auto d-flex justify-content-between w-100">
          <div class="d-flex text-default">
            <img
              class="bd-placeholder-img rounded me-2"
              src="./assets/images/brand-logos/favicon.ico"
              alt="..."
              />
              <strong class="tx-14 mg-b-0 mg-r-auto">scifi</strong>
            </div>
            <div class="d-flex ms-auto">
              <small class="text-muted me-2 lh-lg">2 mins ago</small>
            </div>
          </div>
        </ng-template>
        Heads up, toasts will stack automatically
      </ngb-toast>
    }
  </div>`,
toasts5 = `  @if (show1) {
  <ngb-toast [autohide]="false" (hidden)="show1 = false">
    <ng-template ngbToastHeader>
      <div class="me-auto d-flex justify-content-between w-100">
        <div class="d-flex text-default">
          <img
            class="bd-placeholder-img rounded me-2"
            src="./assets/images/brand-logos/favicon.ico"
            alt="..."
            />
            <strong class="me-auto">scifi</strong>
          </div>
          <div class="d-flex">
            <small class="text-muted me-2 lh-lg">11 mins ago</small>
          </div>
        </div>
      </ng-template>
      Hello, world! This is a toast message.
    </ngb-toast>
  }`,
toasts6 = `  @if (show9) {
  <ngb-toast
    [autohide]="false"
    class="toast align-items-center fade show mb-3"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    >
    <div class="d-flex">
      <div class="toast-body">Hello, world! This is a toast message.</div>
      <button
        type="button"
        class="btn-close me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
        (click)="show9 = false"
      ></button>
    </div>
  </ngb-toast>
}
<div>
  <span class="my-4 text-muted">
    Alternatively, you can also add additional controls and components
    to toasts.
  </span>
</div>
@if (show10) {
  <ngb-toast
    [autohide]="false"
    class="toast fade show mt-2"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    >
    <div class="toast-body">
      Hello, world! This is a toast message.
      <div class="mt-2 pt-2 border-top">
        <button type="button" class="btn btn-primary btn-sm btn-wave me-2">
          Take action
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-sm btn-wave"
          data-bs-dismiss="toast"
          (click)="show10 = false"
          >
          Close
        </button>
      </div>
    </div>
  </ngb-toast>
}`,
toasts7 = ` <div class="btn-list">
<button
  type="button"
  class="btn btn-primary-light me-2 btn-wave"
  id="primaryToastBtn"
  (click)="showToastprimary()"
  >
  Primary
</button>
<button
  type="button"
  class="btn btn-secondary-light me-2 btn-wave"
  id="secondaryToastBtn"
  (click)="showToastseconday()"
  >
  secondary
</button>
<button
  type="button"
  class="btn btn-warning-light me-2 btn-wave"
  id="warningToastBtn"
  (click)="showToastwarning()"
  >
  warning
</button>
<button
  type="button"
  class="btn btn-info-light me-2 btn-wave"
  id="infoToastBtn"
  (click)="showToastinfo()"
  >
  info
</button>
<button
  type="button"
  class="btn btn-success-light me-2 btn-wave"
  id="successToastBtn"
  (click)="showToastsuccess()"
  >
  success
</button>
<button
  type="button"
  class="btn btn-danger-light me-2 btn-wave"
  id="dangerToastBtn"
  (click)="showToastdanger()"
  >
  danger
</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toasts1; track toast) {
  <ngb-toast
    class="toast colored-toast bg-primary-transparent"
    [delay]="5000"
    [autohide]="toast.autohide"
    (hide)="hideToastprimary(toast)"
    [class.bg-warning]="!toast.autohide"
    >
    <ng-template ngbToastHeader>
      <img
        class="bd-placeholder-img rounded me-2"
        src="./assets/images/brand-logos/toggle-dark.png"
        alt="..."
        />
        <strong class="me-auto">scifi</strong>
      </ng-template>
      Your,toast message here.
    </ngb-toast>
  }
  @for (toast of toasts2; track toast) {
    <ngb-toast
      class="toast colored-toast bg-secondary-transparent"
      [delay]="5000"
      [autohide]="toast.autohide"
      (hide)="hideToastsecondary(toast)"
      [class.bg-warning]="!toast.autohide"
      >
      <ng-template ngbToastHeader>
        <img
          class="bd-placeholder-img rounded me-2"
          src="./assets/images/brand-logos/toggle-dark.png"
          alt="..."
          />
          <strong class="me-auto">scifi</strong>
        </ng-template>
        Your,toast message here.
      </ngb-toast>
    }
    @for (toast of toasts3; track toast) {
      <ngb-toast
        class="toast colored-toast bg-warning-transparent"
        [delay]="5000"
        [autohide]="toast.autohide"
        (hide)="hideToastwarning(toast)"
        [class.bg-warning]="!toast.autohide"
        >
        <ng-template ngbToastHeader>
          <img
            class="bd-placeholder-img rounded me-2"
            src="./assets/images/brand-logos/toggle-dark.png"
            alt="..."
            />
            <strong class="me-auto">scifi</strong>
          </ng-template>
          Your,toast message here.
        </ngb-toast>
      }
      @for (toast of toasts4; track toast) {
        <ngb-toast
          class="toast colored-toast bg-info-transparent"
          [delay]="5000"
          [autohide]="toast.autohide"
          (hide)="hideToastinfo(toast)"
          [class.bg-danger]="!toast.autohide"
          >
          <ng-template ngbToastHeader>
            <img
              class="bd-placeholder-img rounded me-2"
              src="./assets/images/brand-logos/toggle-dark.png"
              alt="..."
              />
              <strong class="me-auto">scifi</strong>
            </ng-template>
            Your,toast message here.
          </ngb-toast>
        }

        @for (toast of toasts5; track toast) {
          <ngb-toast
            class="toast colored-toast bg-success-transparent"
            [delay]="5000"
            [autohide]="toast.autohide"
            (hide)="hideToastsuccess(toast)"
            [class.bg-warning]="!toast.autohide"
            >
            <ng-template ngbToastHeader>
              <img
                class="bd-placeholder-img rounded me-2"
                src="./assets/images/brand-logos/toggle-dark.png"
                alt="..."
                />
                <strong class="me-auto">scifi</strong>
              </ng-template>
              Your,toast message here.
            </ngb-toast>
          }

          @for (toast of toasts6; track toast) {
            <ngb-toast
              class="toast colored-toast bg-danger-transparent"
              [delay]="5000"
              [autohide]="toast.autohide"
              (hide)="hideToastdanger(toast)"
              [class.bg-danger]="!toast.autohide"
              >
              <ng-template ngbToastHeader>
                <img
                  class="bd-placeholder-img rounded me-2"
                  src="./assets/images/brand-logos/toggle-dark.png"
                  alt="..."
                  />
                  <strong class="me-auto">scifi</strong>
                </ng-template>
                Your,toast message here.
              </ngb-toast>
            }
          </div>`,
toasts8 = `<div class="btn-list">
<button
  type="button"
  class="btn btn-primary me-2 btn-wave"
  id="solidprimaryToastBtn"
  (click)="SolidToastprimary()"
  >
  Primary
</button>
<button
  type="button"
  class="btn btn-secondary me-2 btn-wave"
  id="solidsecondaryToastBtn"
  (click)="SolidToastsecondary()"
  >
  secondary
</button>
<button
  type="button"
  class="btn btn-warning me-2 btn-wave"
  id="solidsecondaryToastBtn"
  (click)="SolidToastwarning()"
  >
  Warning
</button>
<button
  type="button"
  class="btn btn-info me-2 btn-wave"
  id="solidinfoToastBtn"
  (click)="SolidToastinfo()"
  >
  info
</button>
<button
  type="button"
  class="btn btn-success me-2 btn-wave"
  id="solidsuccessToastBtn"
  (click)="SolidToastsuccess()"
  >
  success
</button>
<button
  type="button"
  class="btn btn-danger me-2 btn-wave"
  id="soliddangerToastBtn"
  (click)="SolidToastdanger()"
  >
  danger
</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toastsA; track toast) {
  <ngb-toast
    id="solid-primaryToast"
    class="toast colored-toast bg-primary text-fixed-white"
    [delay]="5000"
    [autohide]="toast.autohide"
    (click)="hideSolidToastprimary(toast)"
    [class.bg-warning]="!toast.autohide"
    >
    <ng-template ngbToastHeader>
      <img
        class="bd-placeholder-img rounded me-2"
        src="./assets/images/brand-logos/toggle-dark.png"
        alt="..."
        />
        <strong class="me-auto">scifi</strong>
      </ng-template>
      Your,toast message here.
    </ngb-toast>
  }
  @for (toast of toastsB; track toast) {
    <ngb-toast
      id="solid-secondaryToast"
      class="toast colored-toast bg-secondary text-fixed-white"
      [delay]="5000"
      [autohide]="toast.autohide"
      (hide)="hideSolidToastsecondary(toast)"
      [class.bg-warning]="!toast.autohide"
      >
      <ng-template ngbToastHeader>
        <img
          class="bd-placeholder-img rounded me-2"
          src="./assets/images/brand-logos/toggle-dark.png"
          alt="..."
          />
          <strong class="me-auto">scifi</strong>
        </ng-template>
        Your,toast message here.
      </ngb-toast>
    }
    @for (toast of toastsC; track toast) {
      <ngb-toast
        id="solid-warningToast"
        class="toast colored-toast bg-warning text-fixed-white"
        [delay]="5000"
        [autohide]="toast.autohide"
        (hide)="hideSolidToastwarning(toast)"
        >
        <ng-template ngbToastHeader>
          <img
            class="bd-placeholder-img rounded me-2"
            src="./assets/images/brand-logos/toggle-dark.png"
            alt="..."
            />
            <strong class="me-auto">scifi</strong>
          </ng-template>
          Your,toast message here.
        </ngb-toast>
      }
      @for (toast of toastsD; track toast) {
        <ngb-toast
          id="solid-infoToast"
          class="toast colored-toast bg-info text-fixed-white"
          [delay]="5000"
          [autohide]="toast.autohide"
          (hide)="hideSolidToastinfo(toast)"
          [class.bg-warning]="!toast.autohide"
          >
          <ng-template ngbToastHeader>
            <img
              class="bd-placeholder-img rounded me-2"
              src="./assets/images/brand-logos/toggle-dark.png"
              alt="..."
              />
              <strong class="me-auto">scifi</strong>
            </ng-template>
            Your,toast message here.
          </ngb-toast>
        }
        @for (toast of toastsE; track toast) {
          <ngb-toast
            id="solid-successToast"
            class="toast colored-toast bg-success text-fixed-white"
            [delay]="5000"
            [autohide]="toast.autohide"
            (hide)="hideSolidToastsuccess(toast)"
            [class.bg-warning]="!toast.autohide"
            >
            <ng-template ngbToastHeader>
              <img
                class="bd-placeholder-img rounded me-2"
                src="./assets/images/brand-logos/toggle-dark.png"
                alt="..."
                />
                <strong class="me-auto">scifi</strong>
              </ng-template>
              Your,toast message here.
            </ngb-toast>
          }
          @for (toast of toastsF; track toast) {
            <ngb-toast
              id="solid-dangerToast"
              class="toast colored-toast bg-danger text-fixed-white"
              [delay]="5000"
              [autohide]="toast.autohide"
              (hide)="hideSolidToastdanger(toast)"
              [class.bg-warning]="!toast.autohide"
              >
              <ng-template ngbToastHeader>
                <img
                  class="bd-placeholder-img rounded me-2"
                  src="./assets/images/brand-logos/toggle-dark.png"
                  alt="..."
                  />
                  <strong class="me-auto">scifi</strong>
                </ng-template>
                Your,toast message here.
              </ngb-toast>
            }
          </div>`,
toasts9 = ` <div class="bd-example bg-light bd-example-toasts d-flex justify-content-center align-items-center px-2">
@if (show16) {
  <ngb-toast [autohide]="false" class="shadow-lg">
    <ng-template ngbToastHeader>
      <div class="d-flex text-default">
        <img
          class="bd-placeholder-img rounded me-2"
          src="./assets/images/brand-logos/favicon.ico"
          alt="..."
          />
          <strong class="me-auto">scifi</strong>
        </div>
        <div class="d-flex ms-auto">
          <small class="text-muted me-2 lh-lg">11 mins ago</small>
        </div>
      </ng-template>
      Hello, world! This is a toast message.
    </ngb-toast>
  }
</div>                           
`