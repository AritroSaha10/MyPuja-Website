import React, { Component } from "react";

class Donate extends Component {
  state = { amount: 0 };
  render() {
    return (
      <div className="container">
        <div class="py-5 text-center">
          <h1>Donation Page</h1>
          <p class="lead">
            Thank you for considering to donate to the Toronto Kalibari! Please
            input your information below, and you'll be emailed a reciept. (This
            page has not been finished yet.)
          </p>
        </div>

        <form className="needs-validation" novalidate="" _lpchecked="1">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label for="firstName" className="float-left">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                value=""
                required=""
                style={{ cursor: "auto" }}
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="lastName" className="float-left">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                value=""
                required=""
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="email" className="float-left">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <div className="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>

          <div className="mb-3">
            <label for="address" className="float-left">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              required=""
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="mb-3">
            <label for="address2" className="float-left">
              Address 2 <span className="text-muted">(Optional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Apartment or suite"
            />
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <label for="postal" className="float-left">
                Postal code
              </label>
              <input
                type="text"
                className="form-control"
                id="postal"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Postal code required.</div>
            </div>

            <div className="col-md-3 mb-3">
              <label for="money" className="float-left">
                Amount (to the nearest dollar)
              </label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  value={this.state.amount}
                  onChange={(event) =>
                    this.setState({
                      amount: event.target.value.replace(/\D/, ""),
                    })
                  }
                  className="form-control"
                />
                <div class="input-group-append">
                  <span class="input-group-text">.00</span>
                </div>
              </div>
              <div className="invalid-feedback">
                Amount of money must be larger than $0.
              </div>
            </div>
          </div>

          <hr className="mb-4" />
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="same-address"
            />
            <label
              className="custom-control-label float-left"
              for="same-address"
            >
              Shipping address is the same as my billing address
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="save-info"
            />
            <label className="custom-control-label float-left" for="save-info">
              Save this information for next time
            </label>
          </div>
          <hr className="mb-4" />

          <h4 className="mb-3">Payment</h4>

          <div className="d-block my-3">
            <div className="custom-control custom-radio">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                checked=""
                required=""
              />
              <label className="custom-control-label float-left" for="credit">
                Credit card
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                required=""
              />
              <label className="custom-control-label float-left" for="debit">
                Debit card
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                required=""
              />
              <label className="custom-control-label float-left" for="paypal">
                Paypal
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label for="cc-name" className="float-left">
                Name on card
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                placeholder=""
                required=""
              />
              <small className="text-muted">
                Full name as displayed on card
              </small>
              <div className="invalid-feedback">Name on card is required</div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="cc-number" className="float-left">
                Credit card number
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label for="cc-expiration" className="float-left">
                Expiration
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-expiration"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Expiration date required</div>
            </div>
            <div className="col-md-3 mb-3">
              <label for="cc-expiration" className="float-left">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-cvv"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Security code required</div>
            </div>
          </div>
          <hr className="mb-4"></hr>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    );
  }
}

export default Donate;
