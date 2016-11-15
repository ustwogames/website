import React from "react"

import Page from "../Page"

const Support = (props) => {
  function setAutocompleteType(component, type) {
    if(component) {
      component.setAttribute('x-autocompletetype', type)
      component.setAttribute('autocompletetype', type)
      component.setAttribute('autocomplete', type)
    }
  }

  return (
    <Page
      { ...props }
    >
      <div className="form-wrapper">
        <div className="form-inner-wrapper">
          <form autoComplete="on" action="https://dan-gray-o03j.squarespace.com" method="POST" onSubmit={ () => { return false; } }>
              <div className="field-list clear">
                    <fieldset id="form-name" className="form-item fields name">
                    <div className="title">Name</div>
                    <legend>Name</legend>
                      <div className="field first-name">
                        <label className="caption"><input className="field-element field-control" name="fname" ref={(input) => setAutocompleteType(input, 'given-name')} type="text" spellCheck="false" maxLength="30" data-title="First" />First Name</label>
                      </div>
                      <div className="field last-name">
                        <label className="caption"><input className="field-element field-control" name="lname" ref={(input) => setAutocompleteType(input, 'surname')} type="text" spellCheck="false" maxLength="30" data-title="Last" />Last Name</label>
                      </div>
                    </fieldset>
                    <div id="form-email" className="form-item field email required">
                      <label className="title" htmlFor="form-email-input">Email Address <span className="required">*</span></label>
                      <input className="field-element" name="email" ref={(input) => setAutocompleteType(input, 'email')} type="text" spellCheck="false" id="form-email-input" />
                    </div>
                    <div id="form-reason" className="form-item field select required">
                      <label className="title" htmlFor="form-reason-input">Reason <span className="required">*</span></label>
                      <select name="form-reason-input">
                          <option value="Select One">Select One</option>
                          <option value="Report a Bug">Report a Bug</option>
                          <option value="General Enquiries">General Enquiries</option>
                          <option value="Press Enquiries">Press Enquiries</option>
                      </select>
                    </div>
                    <div id="form-message" className="form-item field textarea required">
                      <label className="title" htmlFor="form-message-input">Message <span className="required">*</span></label>
                      <div className="description">If you are contacting us to report a bug in the game, please give details of the device and software version you are currently using.</div>
                      <textarea className="field-element " id="form-message-input"></textarea>
                    </div>
              </div>
            <div className="form-button-wrapper form-button-wrapper--align-left">
              <input className="button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default Support
