let list = `[
    {
          type: 'outline-success',
          message: 'A simple outline primary alert—check it out!',
      },
      ...
  ]`;

export let alertTS = `<ngb-alert [dismissible]="true" type="warning" class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</ngb-alert>`;

export let alertTS1 = ` @for(alert of livealerts; track alert.id){
    <div class="alert alert-success mb-2" role="alert" aria-live="polite">
        {{ alert }}
        <button type="button" class="close" aria-label="Close" (click)="removeAlert(i)">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    }
    <button type="button" class="btn btn-primary" id="liveAlertBtn" (click)="showAlert()">
    show alert
 </button>`;
export let alertTS2 = `<div class="card-body">
<div class="alert alert-primary mb-2" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary mb-2" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success mb-2" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger mb-2" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning mb-2" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info mb-2" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light mb-2" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark mb-2" role="alert">
  A simple dark alert—check it out!
</div>
</div>`;
export let alertTS3 = `<div class="card-body">
<div class="alert alert-primary mb-2" role="alert">
  A simple primary alert with
  <a href="javascript:void(0);" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
<div class="alert alert-secondary mb-2" role="alert">
  A simple secondary alert with
  <a href="javascript:void(0);" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
<div class="alert alert-success mb-2" role="alert">
  A simple success alert with
  <a href="javascript:void(0);" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
<div class="alert alert-danger mb-2" role="alert">
  A simple danger alert with
  <a href="javascript:void(0);" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
<div class="alert alert-warning mb-2" role="alert">
  A simple warning alert with
  <a href="javascript:void(0);" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
<div class="alert alert-info mb-2" role="alert">
  A simple info alert with
  <a href="javascript:void(0);" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
<div class="alert alert-light mb-2" role="alert">
  A simple light alert with
  <a href="javascript:void(0);" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
<div class="alert alert-dark mb-2" role="alert">
  A simple dark alert with
  <a href="javascript:void(0);" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
</div>`;
export let alertTS4 = `  @for (alert of solidAlerts; track alert; let i = $index) {
        <div
          class="alert alert-{{ alert.type }} alert-dismissible fade show my-2"
        >
          {{ alert.message }}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            (click)="solidClose(i)"
          >
            <i class="bi bi-x"></i>
          </button>
        </div>
        }`;
export let alertTS5 = ` <div class="card-body">
    @for (alert of outlineAlerts; track alert; let i = $index) {
    <div
      class="alert alert-{{ alert.type }} alert-dismissible fade show my-2"
    >
      {{ alert.message }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="OutlineClose(i)"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
    }
  </div>`;
export let alertTS6 = ` <div class="card-body">
@for (alert of solidShadowsAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} shadow-sm alert-dismissible fade show my-2"
>
  A simple solid primary alert with small shadow—check it out!
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    (click)="solidShadowsAlertsClose(i)"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}
</div>`;
export let alertTS7 = `  <div class="card-body">
<div class="alert alert-primary shadow-sm my-2">
  A simple primary alert with small shadow—check it out!
</div>
<div class="alert alert-primary shadow my-2">
  A simple primary alert with normal shadow—check it out!
</div>
<div class="alert alert-primary shadow-lg my-2">
  A simple primary alert with large shadow—check it out!
</div>
<div class="alert alert-secondary shadow-sm my-2">
  A simple secondary alert with small shadow—check it out!
</div>
<div class="alert alert-secondary shadow my-2">
  A simple secondary alert with normal shadow—check it out!
</div>
<div class="alert alert-secondary shadow-lg my-2">
  A simple secondary alert with large shadow—check it out!
</div>
</div>`;
export let alertTS8 = `   <div class="card-body">
@for (alert of solidroundedAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} rounded-pill alert-dismissible fade show mb-2"
>
  {{ alert.message }}
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
    (click)="solidroundedClose(i)"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}
</div> `;
export let alertTS9 = `  <div class="card-body">
    @for (alert of roundedoutlineAlerts; track alert; let i = $index) {
    <div
      class="alert alert-{{
        alert.type
      }} rounded-pill alert-dismissible fade show my-2"
    >
      {{ alert.message }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="roundedoutlineClose(i)"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
    }
  </div> `;
export let alertTS10 = ` <div class="card-body">
        @for (alert of roundeDefaultAlerts; track alert; let i = $index) {
        <div
          class="alert alert-{{
            alert.type
          }} rounded-pill alert-dismissible fade show my-2"
        >
          {{ alert.message }}
          <button
            type="button"
            class="btn-close"
            (click)="roundeDefaultClose(i)"
            data-bs-dismiss="alert"
            aria-label="Close"
          >
            <i class="bi bi-x"></i>
          </button>
        </div>
        }
      </div>`;
export let alertTS11 = `  <div class="card-body">
  @for (alert of CustomeButtonAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      (click)="CustomeButtonClose(i)"
      class="btn-close custom-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }
</div> `;
export let alertTS12 = `  <div class="card-body">
  <div
    class="alert alert-primary d-flex align-items-center my-2"
    role="alert"
  >
    <svg
      class="flex-shrink-0 me-2 svg-primary"
      xmlns="http://www.w3.org/2000/svg"
      height="1.5rem"
      viewBox="0 0 24 24"
      width="1.5rem"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      />
    </svg>
    <div>An example alert with an icon</div>
  </div>
  <div
    class="alert alert-success d-flex align-items-center my-2"
    role="alert"
  >
    <svg
      class="flex-shrink-0 me-2 svg-success"
      xmlns="http://www.w3.org/2000/svg"
      height="1.5rem"
      viewBox="0 0 24 24"
      width="1.5rem"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
      <path
        d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      />
    </svg>
    <div>An example success alert with an icon</div>
  </div>
  <div
    class="alert alert-warning d-flex align-items-center my-2"
    role="alert"
  >
    <svg
      class="flex-shrink-0 me-2 svg-warning"
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="1.5rem"
      viewBox="0 0 24 24"
      width="1.5rem"
      fill="#000000"
    >
      <g><rect fill="none" height="24" width="24" /></g>
      <g>
        <g>
          <g>
            <path
              d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"
            />
            <polygon points="13,16 11,16 11,18 13,18" />
            <polygon points="13,10 11,10 11,15 13,15" />
          </g>
        </g>
      </g>
    </svg>
    <div>An example warning alert with an icon</div>
  </div>
  <div
    class="alert alert-danger d-flex align-items-center my-2"
    role="alert"
  >
    <svg
      class="flex-shrink-0 me-2 svg-danger"
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="1.5rem"
      viewBox="0 0 24 24"
      width="1.5rem"
      fill="#000000"
    >
      <g><rect fill="none" height="24" width="24" /></g>
      <g>
        <g>
          <g>
            <path
              d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"
            />
            <rect height="6" width="2" x="11" y="7" />
            <rect height="2" width="2" x="11" y="15" />
          </g>
        </g>
      </g>
    </svg>
    <div>An example danger alert with an icon</div>
  </div>
</div>`;
export let alertTS13 = `<div class="card-body">
 @for (alert of CustomizedButtonAlerts; track alert; let i = $index) {
 <div
   class="alert alert-{{
     alert.type
   }} alert-dismissible fade show custom-alert-icon shadow-sm my-2"
   role="alert"
 >
   <i class="bi {{ alert.icon }}"></i>
   {{ alert.message }}
   <button
     type="button"
     class="btn-close"
     (click)="customizedAlertclose(i)"
     data-bs-dismiss="alert"
     aria-label="Close"
   >
     <i class="bi bi-x"></i>
   </button>
 </div>
 }
</div>`;
export let alertTS14 = `      <div class="card-body">
  <div
    id="rowA"
    class="alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap my-2"
    role="alert"
  >
    <div class="avatar avatar-sm me-3 avatar-rounded">
      <img src="./assets/images/faces/3.jpg" alt="img" />
    </div>
    <div>A simple primary alert with image—check it out!</div>
    <button
      (click)="removeRow('rowA')"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  <div
    id="rowB"
    class="alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap my-2"
    role="alert"
  >
    <div class="avatar avatar-sm me-3 avatar-rounded">
      <img src="./assets/images/faces/5.jpg" alt="img" />
    </div>
    <div>A simple secondary alert with image—check it out!</div>
    <button
      (click)="removeRow('rowB')"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  <div
    id="rowC"
    class="alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap my-2"
    role="alert"
  >
    <div class="avatar avatar-sm me-3 avatar-rounded">
      <img src="./assets/images/faces/8.jpg" alt="img" />
    </div>
    <div>A simple warning alert with image—check it out!</div>
    <button
      (click)="removeRow('rowC')"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  <div
    id="rowD"
    class="alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap my-2"
    role="alert"
  >
    <div class="avatar avatar-sm me-3 avatar-rounded">
      <img src="./assets/images/faces/11.jpg" alt="img" />
    </div>
    <div>A simple danger alert with image—check it out!</div>
    <button
      (click)="removeRow('rowD')"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  <div
    id="rowE"
    class="alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap my-2"
    role="alert"
  >
    <div class="avatar avatar-sm me-3 avatar-rounded">
      <img src="./assets/images/faces/13.jpg" alt="img" />
    </div>
    <div>A simple info alert with image—check it out!</div>
    <button
      (click)="removeRow('rowE')"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  <div
    id="rowF"
    class="alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap my-2"
    role="alert"
  >
    <div class="avatar avatar-sm me-3 avatar-rounded">
      <img src="./assets/images/faces/10.jpg" alt="img" />
    </div>
    <div>A simple light alert with image—check it out!</div>
    <button
      (click)="removeRow('rowF')"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  <div
    id="rowG"
    class="alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap my-2"
    role="alert"
  >
    <div class="avatar avatar-sm me-3 avatar-rounded">
      <img src="./assets/images/faces/15.jpg" alt="img" />
    </div>
    <div>A simple dark alert with image—check it out!</div>
    <button
      (click)="removeRow('rowG')"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x text-muted"></i>
    </button>
  </div>
</div>`;
export let alertTS15 = ` <div
  id="row1"
  class="alert alert-img alert-primary alert-dismissible fase show flex-wrap my-2"
  role="alert"
>
  <div class="avatar avatar-xs me-3">
    <img src="./assets/images/faces/3.jpg" alt="img" />
  </div>
  <div>A simple primary alert with image—check it out!</div>
  <button
    (click)="removeRow('row1')"
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
<div
  id="row2"
  class="alert alert-img alert-secondary alert-dismissible fase show flex-wrap my-2"
  role="alert"
>
  <div class="avatar avatar-sm me-3">
    <img src="./assets/images/faces/5.jpg" alt="img" />
  </div>
  <div>A simple secondary alert with image—check it out!</div>
  <button
    (click)="removeRow('row2')"
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
<div
  id="row3"
  class="alert alert-img alert-warning alert-dismissible fase show flex-wrap my-2"
  role="alert"
>
  <div class="avatar me-3">
    <img src="./assets/images/faces/8.jpg" alt="img" />
  </div>
  <div>A simple warning alert with image—check it out!</div>
  <button
    (click)="removeRow('row3')"
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
<div
  id="row4"
  class="alert alert-img alert-danger alert-dismissible fase show flex-wrap my-2"
  role="alert"
>
  <div class="avatar avatar-md me-3">
    <img src="./assets/images/faces/11.jpg" alt="img" />
  </div>
  <div>A simple danger alert with image—check it out!</div>
  <button
    (click)="removeRow('row4')"
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
<div
  id="row5"
  class="alert alert-img alert-info alert-dismissible fase show flex-wrap my-2"
  role="alert"
>
  <div class="avatar avatar-lg me-3">
    <img src="./assets/images/faces/13.jpg" alt="img" />
  </div>
  <div>A simple info alert with image—check it out!</div>
  <button
    (click)="removeRow('row5')"
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
<div
  id="row6"
  class="alert alert-img alert-dark alert-dismissible fase show flex-wrap my-2"
  role="alert"
>
  <div class="avatar avatar-xl me-3">
    <img src="./assets/images/faces/14.jpg" alt="img" />
  </div>
  <div>A simple info alert with image—check it out!</div>
  <button
    (click)="removeRow('row6')"
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x text-muted"></i>
  </button> 
</div> `;
export let alertTS16 = ` <div class="card-body">
        <div class="row gy-3">
          <div class="col-xl-6">
            <div
              class="alert alert-primary overflow-hidden p-0"
              role="alert"
              [(ngbCollapse)]="isClosedA"
            >
              <div
                class="p-3 bg-primary text-fixed-white d-flex justify-content-between"
              >
                <h6 class="alert-heading mb-0 text-fixed-white">
                  Thank you for reporting this.
                </h6>
                <button
                  type="button"
                  class="btn-close p-0 text-fixed-white"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  (click)="Closetoggle('A')"
                  [attr.aria-expanded]="!isClosedA"
                >
                  <i class="bi bi-x"></i>
                </button>
              </div>
              <hr class="my-0" />
              <div class="p-3">
                <p class="mb-0">
                  We appreciate you to let us know the bug in the template and
                  for warning us about future consequences
                  <a
                    href="javascript:void(0);"
                    class="fw-semibold text-decoration-underline"
                    >Visit for support for queries ?</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div
              class="alert alert-secondary overflow-hidden p-0"
              role="alert"
              [(ngbCollapse)]="isClosedB"
            >
              <div
                class="p-3 bg-secondary text-fixed-white d-flex justify-content-between"
              >
                <h6 class="alert-heading mb-0 text-fixed-white">
                  Thank you for reporting this.
                </h6>
                <button
                  type="button"
                  class="btn-close p-0 text-fixed-white"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  (click)="Closetoggle('B')"
                  [attr.aria-expanded]="!isClosedB"
                >
                  <i class="bi bi-x"></i>
                </button>
              </div>
              <hr class="my-0" />
              <div class="p-3">
                <p class="mb-0">
                  We appreciate you to let us know the bug in the template and
                  for warning us about future consequences
                  <a
                    href="javascript:void(0);"
                    class="fw-semibold text-decoration-underline"
                    >Visit for support for queries ?</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div
              class="alert alert-success overflow-hidden p-0"
              role="alert"
              [(ngbCollapse)]="isClosedC"
            >
              <div
                class="p-3 bg-success text-fixed-white d-flex justify-content-between"
              >
                <h6 class="alert-heading mb-0 text-fixed-white">
                  Thank you for reporting this.
                </h6>
                <button
                  type="button"
                  class="btn-close p-0 text-fixed-white"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  (click)="Closetoggle('C')"
                  [attr.aria-expanded]="!isClosedC"
                >
                  <i class="bi bi-x"></i>
                </button>
              </div>
              <hr class="my-0" />
              <div class="p-3">
                <p class="mb-0">
                  We appreciate you to let us know the bug in the template and
                  for warning us about future consequences
                  <a
                    href="javascript:void(0);"
                    class="fw-semibold text-decoration-underline"
                    >Visit for support for queries ?</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div
              class="alert alert-warning overflow-hidden p-0"
              role="alert"
              [(ngbCollapse)]="isClosedD"
            >
              <div
                class="p-3 bg-warning text-fixed-white d-flex justify-content-between"
              >
                <h6 class="alert-heading mb-0 text-fixed-white">
                  Thank you for reporting this.
                </h6>
                <button
                  type="button"
                  class="btn-close p-0 text-fixed-white"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  (click)="Closetoggle('D')"
                  [attr.aria-expanded]="!isClosedD"
                >
                  <i class="bi bi-x"></i>
                </button>
              </div>
              <hr class="my-0" />
              <div class="p-3">
                <p class="mb-0">
                  We appreciate you to let us know the bug in the template and
                  for warning us about future consequences
                  <a
                    href="javascript:void(0);"
                    class="fw-semibold text-decoration-underline"
                    >Visit for support for queries ?</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
