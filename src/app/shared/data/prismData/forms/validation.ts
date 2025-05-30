  
export let validation1 =  `<form class="row g-3 needs-validation" [formGroup]="form" (ngSubmit)="OnSubmit()">
<div class="col-md-4">
  <label for="validationCustom01" class="form-label">First name</label>
  <input type="text" class="form-control is-invalid" formControlName="fullname"
    id="validationCustom01" required placeholder="Mark"
    [ngClass]="{ 'is-invalid': submitted && f['fullname'].errors }">

    @if (!submitted && f['fullname'].valid) {
      <div class="valid-feedback">
        <div>Looks good!</div>
      </div>
    }

    @if (submitted && f['fullname'].errors) {
      <div class="invalid-feedback">Firstname is required
      </div>
    }

  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" id="last" class="form-control" formControlName="lastname"
      id="validationCustom02" required placeholder="Otto"
      [ngClass]="{ 'is-invalid': submitted && f['lastname'].errors }">

    @if (submitted && f['lastname'].errors) {
      <div class="invalid-feedback">lastname is required
      </div>
    }

  </div>
  <!-- <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">&#64;</span>
      <input type="text" class="form-control" formControlName="username"
        id="validationCustomUsername" aria-describedby="inputGroupPrepend" required
        [ngClass]="{ 'is-invalid': submitted && f['username'].errors }">

      @if (submitted && f['username'].errors) {
        <div class="invalid-feedback">username is required
        </div>
      }

    </div>
  </div> -->
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">&#64;</span>
      <input type="text" class="form-control" formControlName="username"
        id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>

      </div>
      @if (
        form2.controls['username'].invalid &&
        (form2.controls['username'].dirty ||
        form2.controls['username'].touched)
        ) {
        <div class="text-danger">
          User Name is required.
        </div>
      }
    </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" formControlName="city" id="validationCustom03" required
      [ngClass]="{ 'is-invalid': submitted && f ['city'].errors }">


      @if (submitted && f['city'].errors) {
        <div class="invalid-feedback"> Please provide a valid
        city.</div>
      }

    </div>
    <div class="col-md-3">
      <label for="validationCustom04" class="form-label">State</label>
      <ng-select class="" formControlName="state" id="validationCustom04" required
        [ngClass]="{ 'is-invalid': submitted && f ['state'].errors }">
        <ng-option selected disabled value="">Choose...</ng-option>
        <ng-option>...</ng-option>
      </ng-select>
      <!-- <div class="invalid-feedback">
      Please select a valid state.
    </div> -->

    @if (submitted && f['state'].errors) {
      <div class="invalid-feedback">Please select a valid
      state....</div>
    }

  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" formControlName="zip" id="validationCustom05" required
      [ngClass]="{ 'is-invalid': submitted && f['zip'].errors }">
      <!-- <div class="invalid-feedback" >
      Please provide a valid zip.
    </div> -->

    @if (submitted && f['zip'].errors) {
      <div class="invalid-feedback">zip is required</div>
    }

  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck"
        formControlName="acceptTerms" required
        [ngClass]="{ 'is-invalid': submitted && f['acceptTerms'].errors }">
        <label class="form-check-label" for="invalidCheck">
          Agree to terms and conditions
        </label>
        <!-- <div class="invalid-feedback">
        You must agree before submitting.
      </div> -->
      @if (submitted && f['acceptTerms'].errors) {
        <div class="invalid-feedback">
          Accept Terms is required
        </div>
      }
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>`,
validation2 = `    <form class="row g-3" [formGroup]="form2" (ngSubmit)="Submit1()" novalidate>
<div class="col-md-4">
  <label for="validationDefault01" class="form-label">First name</label>
  <input type="text" class="my-auto ti-form-input form-control" formControlName="firstname" placeholder="Mark"
    id="validationDefault01">
    @if ( 
      form2.controls['firstname'].invalid &&
      (form2.controls['firstname'].dirty ||
      form2.controls['firstname'].touched)
      ) {
      <div class="text-danger">
        First Name is required.
      </div>
    }
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label> 
    <input type="text" class="form-control" formControlName="lastname" id="validationDefault02" placeholder="Otto"
      value="Otto" required>
      @if (
        form2.controls['lastname'].invalid &&
        (form2.controls['lastname'].dirty ||
        form2.controls['lastname'].touched)
        ) {
        <div class="text-danger">
          Last Name is required.
        </div>
      }
    </div>
    <div class="col-md-4">
      <label for="validationDefaultUsername" class="form-label">Username</label>
      <div class="input-group">
        <span class="input-group-text" id="inputGroupPrepend2">&#64;</span>
        <input type="text" class="form-control" formControlName="username"
          id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>

        </div>
        @if (
          form2.controls['username'].invalid &&
          (form2.controls['username'].dirty ||
          form2.controls['username'].touched)
          ) {
          <div class="text-danger">
            User Name is required.
          </div>
        }
      </div>
      <div class="col-md-6">
        <label for="validationDefault03" class="form-label">City</label>
        <input type="text" class="form-control" formControlName="city" id="validationDefault03"
          required>
          @if (
            form2.controls['city'].invalid &&
            (form2.controls['city'].dirty ||
            form2.controls['city'].touched)
            ) {
            <div class="text-danger">
              City Name is required.
            </div>
          }
        </div>
        <div class="col-md-3">
          <label for="validationDefault04" class="form-label">State</label>
          <ng-select class="" formControlName="state" id="validationDefault04" required>
            <ng-option selected disabled value="">Choose...</ng-option>
            <ng-option>...</ng-option>
          </ng-select>
          @if (
            form2.controls['state'].invalid &&
            (form2.controls['state'].dirty ||
            form2.controls['state'].touched)
            ) {
            <div class="text-danger">
              State Name is required.
            </div>
          }
        </div>
        <div class="col-md-3">
          <label for="validationDefault05" class="form-label">Zip</label>
          <input type="text" class="form-control" formControlName="zip" id="validationDefault05" required>
          @if (
            form2.controls['zip'].invalid &&
            (form2.controls['zip'].dirty ||
            form2.controls['zip'].touched)
            ) {
            <div class="text-danger">
              Zip  is required.
            </div>
          }
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" formControlName="checkbox"
              id="invalidCheck2" required>
              <label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
              @if (
                form2.controls['checkbox'].invalid &&
                (form2.controls['checkbox'].dirty ||
                form2.controls['checkbox'].touched)
                ) {
                <div class="text-danger">
                  City Name is required.
                </div>
              }
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>`,

validation3 = `   <form class="row g-3">
                          <div class="col-md-4">
                            <label for="validationServer01" class="form-label"
                              >First name</label
                            >
                            <input
                              type="text"
                              class="form-control is-valid form-select"
                              id="validationServer01"
                              value="Mark"
                              required
                            />
                            <div class="valid-feedback">Looks good!</div>
                          </div>
                          <div class="col-md-4">
                            <label for="validationServer02" class="form-label"
                              >Last name</label
                            >
                            <input
                              type="text"
                              class="form-control is-valid form-select"
                              id="validationServer02"
                              value="Otto"
                              required
                            />
                            <div class="valid-feedback">Looks good!</div>
                          </div>
                          <div class="col-md-4">
                            <label for="validationServerUsername" class="form-label"
                              >Username</label
                            >
                            <div class="input-group has-validation">
                              <span class="input-group-text" id="inputGroupPrepend3"
                                >&#64;</span
                              >
                              <input
                                type="text"
                                class="form-control is-invalid form-select"
                                id="validationServerUsername"
                                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                required
                              />
                              <div
                                id="validationServerUsernameFeedback"
                                class="invalid-feedback"
                              >
                                Please choose a username.
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label for="validationServer03" class="form-label">City</label>
                            <input
                              type="text"
                              class="form-control is-invalid form-select"
                              id="validationServer03"
                              aria-describedby="validationServer03Feedback"
                              required
                            />
                            <div id="validationServer03Feedback" class="invalid-feedback">
                              Please provide a valid city.
                            </div>
                          </div>
                          <div class="col-md-3">
                            <label for="validationServer04" class="form-label">State</label>
                            <ng-select
                              class="form-select is-invalid form-control p-0"
                              id="validationServer04"
                              aria-describedby="validationServer04Feedback"
                              required
                            >
                              <ng-option value="0">New york</ng-option>
                          <ng-option value="1">California</ng-option>
                          <ng-option value="2">texas</ng-option>
                          <ng-option value="3">New york</ng-option>
                            </ng-select>
                            <div id="validationServer04Feedback" class="invalid-feedback">
                              Please select a valid state.
                            </div>
                          </div>
                          <div class="col-md-3">
                            <label for="validationServer05" class="form-label">Zip</label>
                            <input
                              type="text"
                              class="form-control is-invalid form-select"
                              id="validationServer05"
                              aria-describedby="validationServer05Feedback"
                              required
                            />
                            <div id="validationServer05Feedback" class="invalid-feedback">
                              Please provide a valid zip.
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-check">
                              <input
                                class="form-check-input is-invalid"
                                type="checkbox"
                                value=""
                                id="invalidCheck3"
                                aria-describedby="invalidCheck3Feedback"
                                required
                              />
                              <label class="form-check-label" for="invalidCheck3">
                                Agree to terms and conditions
                              </label>
                              <div id="invalidCheck3Feedback" class="invalid-feedback">
                                You must agree before submitting.
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <button class="btn btn-primary" type="submit">
                              Submit form
                            </button>
                          </div>
                        </form>`,
validation4 = `  <form class="row g-3 needs-validation" [formGroup]="form3" (ngSubmit)="Submit3()">
<div class="col-md-4 position-relative">
  <label for="validationTooltip01" class="form-label">First
  name</label>
  <input type="text"  class="form-control" formControlName="name" id="validationTooltip01" placeholder="Mark"
    value="Mark" required [ngClass]="{ 'is-invalid': submitted3 && f3['name'].errors }">
    <!-- <div class="valid-tooltip">
    Looks good!
  </div> -->
  @if (submitted3 && f3['name'].errors) {
    <div class="invalid-tooltip">Firstname is
      required
    </div>
  }

</div>
<div class="col-md-4 position-relative">
  <label for="validationTooltip02" class="form-label">Last
  name</label>
  <input type="text" class="form-control" formControlName="lname" id="validationTooltip02"
    value="Otto" required placeholder="Otto"
    [ngClass]="{ 'is-invalid': submitted3 && f3['lname'].errors }">
    <!-- <div class="valid-tooltip">
    Looks good!
  </div> -->
  @if (submitted3 && f3['lname'].errors) {
    <div class="invalid-tooltip">Firstname is
      required
    </div>
  }
</div>
<div class="col-md-4 position-relative">
  <label for="validationTooltipUsername" class="form-label">Username</label>
  <div class="input-group has-validation">
    <span class="input-group-text" id="validationTooltipUsernamePrepend">&#64;</span>
    <input type="text" class="form-control" formControlName="uname"
      id="validationTooltipUsername"
      aria-describedby="validationTooltipUsernamePrepend" required
      [ngClass]="{ 'is-invalid': submitted3 && f3['uname'].errors }">
      <!-- <div class="invalid-tooltip">
      Please choose a unique and valid username.
    </div> -->
    @if (submitted3 && f3['uname'].errors) {
      <div class="invalid-tooltip">Firstname is
        required
      </div>
    }
  </div>
</div>
<div class="col-md-6 position-relative">
  <label for="validationTooltip03" class="form-label">City</label>
  <input type="text" class="form-control" formControlName="cit" id="validationTooltip03"
    required [ngClass]="{ 'is-invalid': submitted3 && f3['cit'].errors }">
    <!-- <div class="invalid-tooltip">
    Please provide a valid city.
  </div> -->
  @if (submitted3 && f3['cit'].errors) {
    <div class="invalid-tooltip">Firstname is
      required
    </div>
  }
</div>
<div class="col-md-3 position-relative">
  <label for="validationTooltip04" class="form-label">State</label>
  <ng-select class="" formControlName="stat" id="validationTooltip04" required
    [ngClass]="{ 'is-invalid': submitted3 && f3['stat'].errors }">
    <ng-option selected disabled value="">Choose...</ng-option>
    <ng-option>...</ng-option>
  </ng-select>
  <!-- <div class="invalid-tooltip">
  Please select a valid state.
</div> -->
@if (submitted3 && f3['stat'].errors) {
  <div class="invalid-tooltip">Firstname is
    required
  </div>
}
</div>
<div class="col-md-3 position-relative">
<label for="validationTooltip05" class="form-label">Zip</label>
<input type="text" class="form-control" formControlName="zip" id="validationTooltip05"
  required [ngClass]="{ 'is-invalid': submitted3 && f3['zip'].errors }">
  <!-- <div class="invalid-tooltip">
  Please provide a valid zip.
</div> -->
@if (submitted3 && f3['zip'].errors) {
  <div class="invalid-tooltip">Firstname is
    required
  </div>
}
</div>
<div class="col-12">
<button class="btn btn-primary" type="submit">Submit
form</button>
</div>
</form>`,
validation5 = ` <form class="was-validated" [formGroup]="form4" (ngSubmit)="Submit()">
<div class="mb-3">
  <label for="validationTextarea" class="form-label">Textarea</label>
  <textarea class="form-control is-invalid" id="validationTextarea"
    placeholder="Required example textarea" formControlName="textarea" required
  [ngClass]="{ 'is-invalid': submitted1 && f1['textarea'].errors }"></textarea>

  <!-- <div class="invalid-feedback">
  Please enter a message in the textarea.
</div> -->
@if (submitted1 && f1['textarea'].errors) {
  <div class="invalid-feedback">
    @if (f1['textarea'].errors['required']) {
      <div>Please enter a message in the textarea.
      </div>
    }
  </div>
}
</div>

<div class="form-check mb-3">
<input type="checkbox" class="form-check-input" id="validationFormCheck1"
  formControlName="checkbox" required
  [ngClass]="{ 'is-invalid': submitted1 && f1['checkbox'].errors }">
  <label class="form-check-label" for="validationFormCheck1">Check this
  checkbox</label>
  @if (submitted1 && f1['checkbox'].errors) {
    <div class="invalid-feedback">
      @if (f1['checkbox'].errors['required']) {
        <div>Example invalid feedback text></div>
      }
    </div>
  }
  <!-- <div class="invalid-feedback">
  Example invalid feedback text
</div> -->
</div>

<div class="form-check">
<input type="radio" class="form-check-input" id="validationFormCheck2"
  name="radio-stacked" required="">
  <label class="form-check-label" for="validationFormCheck2">Toggle this
  radio</label>
</div>
<div class="form-check mb-3">
  <input type="radio" class="form-check-input" id="validationFormCheck3"
    name="radio-stacked" required="">
    <label class="form-check-label" for="validationFormCheck3">Or toggle
      this
    other radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>


  <div class="mb-3">
    <select class="form-select" formControlName="select" required aria-label="select example"
      [ngClass]="{ 'is-invalid': submitted1 && f1['select'].errors }">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

    @if (submitted1 && f1['select'].errors) {
      <div class="invalid-feedback">
        @if (f1['select'].errors['required']) {
          <div>Example invalid select feedback</div>
        }
      </div>
    }
    <!-- <div class="invalid-feedback">Example invalid select feedback</div> -->
  </div>

  <div class="mb-3">
    <input type="file" class="form-control" aria-label="file example" formControlName="feedback"
      required [ngClass]="{ 'is-invalid': submitted && f1['feedback'].errors }">

      @if (submitted1 && f1['feedback'].errors) {
        <div class="invalid-feedback">
          @if (f1['feedback'].errors['required']) {
            <div>Example invalid form file feedback</div>
          }
        </div>
      }
      <!-- <div class="invalid-feedback">Example invalid form file feedback</div> -->
    </div>

    <div class="mb-3">
      <button class="btn btn-primary" type="submit" disabled="">Submit
      form</button>
    </div>
  </form>`