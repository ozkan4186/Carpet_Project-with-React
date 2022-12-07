import React from "react";

const Register = () => {
  return (
    <div>
      <div className="container">
        <link
          href="/Content/css/addindividualui-responsive.css?v=1.21.10.1"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/Content/css/addindividualui-responsive-responsive.css?v=1.21.10.1"
          rel="stylesheet"
          type="text/css"
        />
        <form action="/Vendor/AddIndividualUI" id="uiAddForm" method="post">
          <input
            name="__RequestVerificationToken"
            type="hidden"
            defaultValue="4GyrbB2N9sWRHxZiXj56o9nGMfRR7KnrvBVkO39FeRvldg-fTC1gRHR8Sj9U2Tn_ftxt4BpzagVeiQyIXZWtzxp3Y-FvTfWpzNwUac9CE6c1"
          />{" "}
          <div className="container ">
            <div className="content-page-width page">
              <div className="row-fluid">
                <div
                  className="offset1 span10"
                  style={{ display: "none" }}
                  data-bind="visible: errors().length > 0"
                >
                  <div className="alert alert-danger">
                    <ul data-bind="foreach: errors" />
                  </div>
                </div>
                <fieldset className="span10 offset1 addindividualui-section-first form-horizontal">
                  <div className="span12">
                    <legend>Kayıt formu</legend>
                  </div>
                  <div className="row-fluid">
                    <div className="span6">
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group">
                            <label
                              className="control-label label-width label-hidden"
                              htmlFor="Name"
                            >
                              Ad{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('name')"
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width">
                              <input
                                type="text"
                                id="Name"
                                maxLength={50}
                                className="span11 invalid"
                                data-bind="value: name"
                                tplaceholder="Ad"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden"
                              htmlFor="Surname"
                            >
                              Soyad{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('surname')"
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width">
                              <input
                                type="text"
                                id="Surname"
                                maxLength={50}
                                className="span11 invalid"
                                data-bind="value: surname"
                                tplaceholder="Soyad"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden"
                              htmlFor="ContactModel_GsmNumber"
                            >
                              GSM{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('gsm')"
                                style={{ display: "none" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width">
                              <input
                                type="text"
                                id="ContactModel_GsmNumber"
                                className="phone span11 valid"
                                data-bind="value: gsmNumber"
                                tplaceholder="GSM"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="span6">
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden"
                              htmlFor="Email"
                            >
                              E-Posta{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('email')"
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width">
                              <input
                                type="text"
                                id="Email"
                                maxLength={50}
                                className="span11 invalid"
                                data-bind="value: email"
                                tplaceholder="E-Posta"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden"
                              htmlFor="Password"
                            >
                              Şifre{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('password')"
                              >
                                *
                              </span>
                            </label>
                            <div className="controls password-textbox textbox-form-width">
                              <input
                                type="password"
                                id="Password"
                                maxLength={30}
                                className="span11"
                                data-bind="value: password"
                                tplaceholder="Şifre"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden"
                              htmlFor="RePassword"
                            >
                              Şifre tekrar{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('repassword')"
                              >
                                *
                              </span>
                            </label>
                            <div className="controls password-textbox textbox-form-width">
                              <input
                                type="password"
                                id="RePassword"
                                maxLength={30}
                                className="span11"
                                data-bind="value: rePassword"
                                tplaceholder="Şifre tekrar"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-fluid">
                    <div className="span6">
                      <div
                        className="row-fluid"
                        id="SelectVendor"
                        data-bind="visible: isVendorSelectVisible"
                        style={{ display: "none" }}
                      >
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden"
                              htmlFor
                            >
                              Bayi{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('vendorSelection')"
                                style={{ display: "none" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls password-textbox textbox-form-width">
                              <input
                                id="search-parent-vendor"
                                type="text"
                                data-provide="typeahead"
                                className="span11 typeahead"
                                tplaceholder="Bayi"
                                maxLength={30}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row-fluid  pull-right"
                        data-bind="visible: musteriTypeSelectionOptionVisible"
                      >
                        <div className="span12">
                          <div className="form-type">
                            <ul className="company-select">
                              <li className="btn span4 pull-right">
                                <label id="lblIsCompanyIndividual">
                                  <input
                                    type="radio"
                                    name="IsCompany"
                                    defaultValue="false"
                                    data-bind="checked: isCompany"
                                  />
                                  Bireysel
                                </label>
                              </li>
                              <li className="btn span4 pull-right marbot2">
                                <label id="lblIsCompanyCompany">
                                  <input
                                    type="radio"
                                    name="IsCompany"
                                    defaultValue="true"
                                    data-bind="checked: isCompany"
                                  />
                                  Kurumsal
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row-fluid"
                        data-bind="visible: isIndividual"
                        style={{ display: "none" }}
                      >
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden rtl-control-label"
                              htmlFor="SelectedCountry"
                            >
                              Ülke <span className="validater">*</span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls-select">
                              <span style={{ position: "relative" }}>
                                <select
                                  data-bind="options: availableCountries, optionsText: 'name', value: country, optionsCaption: 'Choose...'"
                                  className="span11"
                                  tplaceholder="Ülke"
                                >
                                  <option value>Choose...</option>
                                  <option value>Afghanistan</option>
                                  <option value>Albania</option>
                                  <option value>Algeria</option>
                                  <option value>American Samoa</option>
                                  <option value>Andorra</option>
                                  <option value>Angola</option>
                                  <option value>Anguilla</option>
                                  <option value>Antarctica</option>
                                  <option value>Antigua and Barbuda</option>
                                  <option value>Argentina</option>
                                  <option value>Armenia</option>
                                  <option value>Aruba</option>
                                  <option value>Australia</option>
                                  <option value>Austria</option>
                                  <option value>Azerbaijan</option>
                                  <option value>Bahamas</option>
                                  <option value>Bahrain</option>
                                  <option value>Bangladesh</option>
                                  <option value>Barbados</option>
                                  <option value>Belarus</option>
                                  <option value>Belgium</option>
                                  <option value>Belize</option>
                                  <option value>Benin</option>
                                  <option value>Bermuda</option>
                                  <option value>Bhutan</option>
                                  <option value>Bolivia</option>
                                  <option value>Bonaire</option>
                                  <option value>Bosnia and Herzegovina</option>
                                  <option value>Botswana</option>
                                  <option value>Bouvet Island</option>
                                  <option value>Brazil</option>
                                  <option value>
                                    British Indian Ocean Territory
                                  </option>
                                  <option value>Brunei Darussalam</option>
                                  <option value>Bulgaria</option>
                                  <option value>Burkina Faso</option>
                                  <option value>Burundi</option>
                                  <option value>Cambodia</option>
                                  <option value>Cameroon</option>
                                  <option value>Canada</option>
                                  <option value>Cape Verde</option>
                                  <option value>Cayman Islands</option>
                                  <option value>
                                    Central African Republic
                                  </option>
                                  <option value>Chad</option>
                                  <option value>Chile</option>
                                  <option value>China</option>
                                  <option value>Christmas Island</option>
                                  <option value>Cocos (Keeling) Islands</option>
                                  <option value>Colombia</option>
                                  <option value>Comoros</option>
                                  <option value>Congo</option>
                                  <option value>
                                    Democratic Republic of the Congo
                                  </option>
                                  <option value>Cook Islands</option>
                                  <option value>Costa Rica</option>
                                  <option value>Croatia</option>
                                  <option value>Cuba</option>
                                  <option value>Curacao</option>
                                  <option value>Cyprus</option>
                                  <option value>Czech Republic</option>
                                  <option value>Cote d'Ivoire</option>
                                  <option value>Denmark</option>
                                  <option value>Djibouti</option>
                                  <option value>Dominica</option>
                                  <option value>Dominican Republic</option>
                                  <option value>Ecuador</option>
                                  <option value>Egypt</option>
                                  <option value>El Salvador</option>
                                  <option value>Equatorial Guinea</option>
                                  <option value>Eritrea</option>
                                  <option value>Estonia</option>
                                  <option value>Ethiopia</option>
                                  <option value>
                                    Falkland Islands (Malvinas)
                                  </option>
                                  <option value>Faroe Islands</option>
                                  <option value>Fiji</option>
                                  <option value>Finland</option>
                                  <option value>France</option>
                                  <option value>French Guiana</option>
                                  <option value>French Polynesia</option>
                                  <option value>
                                    French Southern Territories
                                  </option>
                                  <option value>Gabon</option>
                                  <option value>Gambia</option>
                                  <option value>Georgia</option>
                                  <option value>Germany</option>
                                  <option value>Ghana</option>
                                  <option value>Gibraltar</option>
                                  <option value>Greece</option>
                                  <option value>Greenland</option>
                                  <option value>Grenada</option>
                                  <option value>Guadeloupe</option>
                                  <option value>Guam</option>
                                  <option value>Guatemala</option>
                                  <option value>Guernsey</option>
                                  <option value>Guinea</option>
                                  <option value>Guinea-Bissau</option>
                                  <option value>Guyana</option>
                                  <option value>Haiti</option>
                                  <option value>
                                    Heard Island and McDonald&nbsp;Islands
                                  </option>
                                  <option value>
                                    Holy See (Vatican City State)
                                  </option>
                                  <option value>Honduras</option>
                                  <option value>Hong Kong</option>
                                  <option value>Hungary</option>
                                  <option value>Iceland</option>
                                  <option value>India</option>
                                  <option value>Indonesia</option>
                                  <option value>
                                    Iran, Islamic Republic of
                                  </option>
                                  <option value>Iraq</option>
                                  <option value>Ireland</option>
                                  <option value>Isle of Man</option>
                                  <option value>Israel</option>
                                  <option value>Italy</option>
                                  <option value>Jamaica</option>
                                  <option value>Japan</option>
                                  <option value>Jersey</option>
                                  <option value>Jordan</option>
                                  <option value>Kazakhstan</option>
                                  <option value>Kenya</option>
                                  <option value>Kiribati</option>
                                  <option value>
                                    Korea, Democratic People's Republic of
                                  </option>
                                  <option value>Korea, Republic of</option>
                                  <option value>Kuwait</option>
                                  <option value>Kyrgyzstan</option>
                                  <option value>
                                    Lao People's Democratic Republic
                                  </option>
                                  <option value>Latvia</option>
                                  <option value>Lebanon</option>
                                  <option value>Lesotho</option>
                                  <option value>Liberia</option>
                                  <option value>Libya</option>
                                  <option value>Liechtenstein</option>
                                  <option value>Lithuania</option>
                                  <option value>Luxembourg</option>
                                  <option value>Macao</option>
                                  <option value>
                                    Macedonia, the Former Yugoslav Republic of
                                  </option>
                                  <option value>Madagascar</option>
                                  <option value>Malawi</option>
                                  <option value>Malaysia</option>
                                  <option value>Maldives</option>
                                  <option value>Mali</option>
                                  <option value>Malta</option>
                                  <option value>Marshall Islands</option>
                                  <option value>Martinique</option>
                                  <option value>Mauritania</option>
                                  <option value>Mauritius</option>
                                  <option value>Mayotte</option>
                                  <option value>Mexico</option>
                                  <option value>
                                    Micronesia, Federated States of
                                  </option>
                                  <option value>Moldova, Republic of</option>
                                  <option value>Monaco</option>
                                  <option value>Mongolia</option>
                                  <option value>Montenegro</option>
                                  <option value>Montserrat</option>
                                  <option value>Morocco</option>
                                  <option value>Mozambique</option>
                                  <option value>Myanmar</option>
                                  <option value>Namibia</option>
                                  <option value>Nauru</option>
                                  <option value>Nepal</option>
                                  <option value>Netherlands</option>
                                  <option value>New Caledonia</option>
                                  <option value>New Zealand</option>
                                  <option value>Nicaragua</option>
                                  <option value>Niger</option>
                                  <option value>Nigeria</option>
                                  <option value>Niue</option>
                                  <option value>Norfolk Island</option>
                                  <option value>
                                    Northern Mariana Islands
                                  </option>
                                  <option value>Norway</option>
                                  <option value>Oman</option>
                                  <option value>Pakistan</option>
                                  <option value>Palau</option>
                                  <option value>Palestine, State of</option>
                                  <option value>Panama</option>
                                  <option value>Papua New Guinea</option>
                                  <option value>Paraguay</option>
                                  <option value>Peru</option>
                                  <option value>Philippines</option>
                                  <option value>Pitcairn</option>
                                  <option value>Poland</option>
                                  <option value>Portugal</option>
                                  <option value>Puerto Rico</option>
                                  <option value>Qatar</option>
                                  <option value>Romania</option>
                                  <option value>Russian Federation</option>
                                  <option value>Rwanda</option>
                                  <option value>Reunion</option>
                                  <option value>Saint Barthelemy</option>
                                  <option value>Saint Helena</option>
                                  <option value>Saint Kitts and Nevis</option>
                                  <option value>Saint Lucia</option>
                                  <option value>
                                    Saint Martin (French part)
                                  </option>
                                  <option value>
                                    Saint Pierre and Miquelon
                                  </option>
                                  <option value>
                                    Saint Vincent and the Grenadines
                                  </option>
                                  <option value>Samoa</option>
                                  <option value>San Marino</option>
                                  <option value>Sao Tome and Principe</option>
                                  <option value>Saudi Arabia</option>
                                  <option value>Senegal</option>
                                  <option value>Serbia</option>
                                  <option value>Seychelles</option>
                                  <option value>Sierra Leone</option>
                                  <option value>Singapore</option>
                                  <option value>
                                    Sint Maarten (Dutch part)
                                  </option>
                                  <option value>Slovakia</option>
                                  <option value>Slovenia</option>
                                  <option value>Solomon Islands</option>
                                  <option value>Somalia</option>
                                  <option value>South Africa</option>
                                  <option value>
                                    South Georgia and the South Sandwich Islands
                                  </option>
                                  <option value>South Sudan</option>
                                  <option value>Spain</option>
                                  <option value>Sri Lanka</option>
                                  <option value>Sudan</option>
                                  <option value>Suriname</option>
                                  <option value>Svalbard and Jan Mayen</option>
                                  <option value>Swaziland</option>
                                  <option value>Sweden</option>
                                  <option value>Switzerland</option>
                                  <option value>Syrian Arab Republic</option>
                                  <option value>Taiwan</option>
                                  <option value>Tajikistan</option>
                                  <option value>
                                    United Republic of Tanzania
                                  </option>
                                  <option value>Thailand</option>
                                  <option value>Timor-Leste</option>
                                  <option value>Togo</option>
                                  <option value>Tokelau</option>
                                  <option value>Tonga</option>
                                  <option value>Trinidad and Tobago</option>
                                  <option value>Tunisia</option>
                                  <option value>Turkey</option>
                                  <option value>Turkmenistan</option>
                                  <option value>
                                    Turks and Caicos Islands
                                  </option>
                                  <option value>Tuvalu</option>
                                  <option value>Uganda</option>
                                  <option value>Ukraine</option>
                                  <option value>United Arab Emirates</option>
                                  <option value>United Kingdom</option>
                                  <option value>United States</option>
                                  <option value>
                                    United States Minor Outlying Islands
                                  </option>
                                  <option value>Uruguay</option>
                                  <option value>Uzbekistan</option>
                                  <option value>Vanuatu</option>
                                  <option value>Venezuela</option>
                                  <option value>Viet Nam</option>
                                  <option value>British Virgin Islands</option>
                                  <option value>US Virgin Islands</option>
                                  <option value>Wallis and Futuna</option>
                                  <option value>Western Sahara</option>
                                  <option value>Yemen</option>
                                  <option value>Zambia</option>
                                  <option value>Zimbabwe</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row-fluid"
                        data-bind="visible: isIndividual() && !isTurkishCitizen()"
                        style={{ display: "none" }}
                      >
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden rtl-control-label"
                              htmlFor="PassportNumber"
                            >
                              Pasaport No{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('passport')"
                                style={{ display: "none" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls">
                              <span style={{ position: "relative" }}>
                                <input
                                  type="text"
                                  id="PassportNumber"
                                  className="span11"
                                  data-bind="value: passportNumber"
                                  tplaceholder="Pasaport No"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row-fluid"
                        data-bind="visible: isIndividual() && isTurkishCitizen()"
                        style={{ display: "none" }}
                      >
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden rtl-control-label"
                              htmlFor="Tckn"
                            >
                              TC Kimlik No{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('tckn')"
                                style={{ display: "none" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls">
                              <span style={{ position: "relative" }}>
                                <input
                                  type="text"
                                  id="Tckn"
                                  maxLength={11}
                                  className="span11"
                                  data-bind="value: tckn, valueUpdate: 'afterkeydown', event:{ keyup: mernisQuery }"
                                  tplaceholder="TC Kimlik No"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row-fluid"
                        data-bind="visible: !isIndividual()"
                        style={{}}
                      >
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden rtl-control-label"
                              htmlFor="CompanyName"
                            >
                              Firma Adı{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('companyName')"
                                style={{}}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls">
                              <input
                                type="text"
                                id="CompanyName"
                                maxLength={100}
                                className="span11 invalid"
                                data-bind="value: companyName"
                                tplaceholder="Firma Adı"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row-fluid"
                        data-bind="visible: !isIndividual()"
                        style={{}}
                      >
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden rtl-control-label"
                              htmlFor="TaxOffice"
                            >
                              Vergi Dairesi
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('taxOffice')"
                                style={{}}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls">
                              <input
                                type="text"
                                id="TaxOffice"
                                maxLength={30}
                                className="span11 invalid"
                                data-bind="value: taxOffice"
                                tplaceholder="Vergi Dairesi"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row-fluid"
                        data-bind="visible: !isIndividual()"
                        style={{}}
                      >
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden rtl-control-label"
                              style={{ marginLeft: "-3px" }}
                              htmlFor="TaxNumber"
                            >
                              Vergi Numarası{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('taxNumber')"
                                style={{ marginLeft: "-2px" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls">
                              <input
                                type="text"
                                id="TaxNumber"
                                maxLength={10}
                                className="span11 invalid"
                                data-bind="value: taxNumber"
                                tplaceholder="Vergi Numarası"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="span6">
                      <div className="row-fluid">
                        <div className="span12 textbox-form-width">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden rtl-control-label"
                              htmlFor="ContactModel_Phone1Number"
                            >
                              Telefon{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('phone1')"
                                style={{ display: "none" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls">
                              <input
                                type="tel"
                                id="ContactModel_Phone1Number"
                                className="phone span11"
                                data-bind="value: phone1Number"
                                tplaceholder="Telefon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden rtl-control-label"
                              htmlFor="ContactModel_Phone2Number"
                            >
                              Telefon2{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('phone2')"
                                style={{ display: "none" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls">
                              <input
                                type="tel"
                                id="ContactModel_Phone2Number"
                                className="phone span11"
                                data-bind="value: phone2Number"
                                tplaceholder="Telefon2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden rtl-control-label"
                              htmlFor="ContactModel_Fax1Number"
                            >
                              Faks{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('fax')"
                                style={{ display: "none" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls">
                              <input
                                type="tel"
                                id="ContactModel_Fax1Number"
                                className="phone span11"
                                data-bind="value: fax1Number"
                                tplaceholder="Faks"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width label-hidden rtl-control-label"
                              htmlFor="AddressModel_Address"
                            >
                              Adres{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('address')"
                                style={{ display: "none" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls">
                              <input
                                type="text"
                                id="AddressModel_Address"
                                className="span11"
                                data-bind="value: address"
                                tplaceholder="Adres"
                                style={{}}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width rtl-control-label"
                              htmlFor="AddressModel_CityId"
                            >
                              İl{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('city')"
                                style={{ display: "none" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls-select">
                              <select
                                id="AddressModel_CityId"
                                data-bind="options: availableCities, optionsText: 'name',optionsValue: 'id' , value: city"
                                className="span11 valid"
                                tplaceholder="İl"
                              >
                                <option value={0}>Şehir Seçiniz</option>
                                <option value={1}>Adana</option>
                                <option value={2}>Adıyaman</option>
                                <option value={3}>Afyonkarahisar</option>
                                <option value={4}>Ağrı</option>
                                <option value={5}>Amasya</option>
                                <option value={6}>Ankara</option>
                                <option value={7}>Antalya</option>
                                <option value={8}>Artvin</option>
                                <option value={9}>Aydın</option>
                                <option value={10}>Balıkesir</option>
                                <option value={11}>Bilecik</option>
                                <option value={12}>Bingöl</option>
                                <option value={13}>Bitlis</option>
                                <option value={14}>Bolu</option>
                                <option value={15}>Burdur</option>
                                <option value={16}>Bursa</option>
                                <option value={17}>Çanakkale</option>
                                <option value={18}>Çankırı</option>
                                <option value={19}>Çorum</option>
                                <option value={20}>Denizli</option>
                                <option value={21}>Diyarbakır</option>
                                <option value={22}>Edirne</option>
                                <option value={23}>Elazığ</option>
                                <option value={24}>Erzincan</option>
                                <option value={25}>Erzurum</option>
                                <option value={26}>Eskişehir</option>
                                <option value={27}>Gaziantep</option>
                                <option value={28}>Giresun</option>
                                <option value={29}>Gümüşhane</option>
                                <option value={30}>Hakkari</option>
                                <option value={31}>Hatay</option>
                                <option value={32}>Isparta</option>
                                <option value={33}>Mersin(İçel)</option>
                                <option value={34}>İstanbul</option>
                                <option value={35}>İzmir</option>
                                <option value={36}>Kars</option>
                                <option value={37}>Kastamonu</option>
                                <option value={38}>Kayseri</option>
                                <option value={39}>Kırklareli</option>
                                <option value={40}>Kırşehir</option>
                                <option value={41}>Kocaeli</option>
                                <option value={42}>Konya</option>
                                <option value={43}>Kütahya</option>
                                <option value={44}>Malatya</option>
                                <option value={45}>Manisa</option>
                                <option value={46}>Kahramanmaraş</option>
                                <option value={47}>Mardin</option>
                                <option value={48}>Muğla</option>
                                <option value={49}>Muş</option>
                                <option value={50}>Nevşehir</option>
                                <option value={51}>Niğde</option>
                                <option value={52}>Ordu</option>
                                <option value={53}>Rize</option>
                                <option value={54}>Sakarya</option>
                                <option value={55}>Samsun</option>
                                <option value={56}>Siirt</option>
                                <option value={57}>Sinop</option>
                                <option value={58}>Sivas</option>
                                <option value={59}>Tekirdağ</option>
                                <option value={60}>Tokat</option>
                                <option value={61}>Trabzon</option>
                                <option value={62}>Tunceli</option>
                                <option value={63}>Şanlıurfa</option>
                                <option value={64}>Uşak</option>
                                <option value={65}>Van</option>
                                <option value={66}>Yozgat</option>
                                <option value={67}>Zonguldak</option>
                                <option value={68}>Aksaray</option>
                                <option value={69}>Bayburt</option>
                                <option value={70}>Karaman</option>
                                <option value={71}>Kırıkkale</option>
                                <option value={72}>Batman</option>
                                <option value={73}>Şırnak</option>
                                <option value={74}>Bartın</option>
                                <option value={75}>Ardahan</option>
                                <option value={76}>Iğdır</option>
                                <option value={77}>Yalova</option>
                                <option value={78}>Karabük</option>
                                <option value={79}>Kilis</option>
                                <option value={80}>Osmaniye</option>
                                <option value={81}>Düzce</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width rtl-control-label"
                              htmlFor="AddressModel_DistrictId"
                            >
                              İlçe{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('district')"
                                style={{ display: "none" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls-select">
                              <select
                                id="AddressModel_DistrictId"
                                data-bind="options: availableDistricts, optionsText: 'name',optionsValue: 'id' , value: district"
                                className="span11 valid"
                                tplaceholder="İlçe"
                              >
                                <option value={0}>Seçiniz</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-fluid">
                        <div className="span12">
                          <div className="control-group form-horizontal">
                            <label
                              className="control-label label-width rtl-control-label"
                              htmlFor="AddressModel_NeighborhoodId"
                            >
                              Semt{" "}
                              <span
                                className="validater"
                                data-bind="visible: isRequiredField('neigborhood')"
                                style={{ display: "none" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="controls textbox-form-width rtl-controls-select">
                              <select
                                id="AddressModel_NeighborhoodId"
                                data-bind="options: availableNeighborhoods, optionsText: 'name',optionsValue: 'id' , value: neighborhood"
                                className="span11 valid"
                                tplaceholder="Semt"
                              ></select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-fluid">
                    <div className="span12">
                      <input
                        type="submit"
                        id="form-submit"
                        defaultValue="KAYDET"
                        className="btn btn-success span3 pull-right user-register-button"
                        style={{}}
                      />
                    </div>
                  </div>
                  <div className="row-fluid">
                    <div className="span12">
                      <div className="notice-container">
                        <div className="notice">
                          <div className="well-small">
                            - Lütfen yukarıdaki formu eksiksiz olarak
                            doldurunuz.
                          </div>
                          <div className="well-small">
                            - Kayıt formunu tamamladığınızda e-mail aracılığı
                            ile verdiğiniz adrese doğrulama bilgisi gelecektir.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </form>
        <link
          href="/Scripts/payment/lib/spinner/blockui-custom.css"
          rel="stylesheet"
        />
      </div>
    </div>
  );
};

export default Register;
