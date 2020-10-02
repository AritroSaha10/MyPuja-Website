import React, { Component } from "react";

// Bootstrap Imports
import { Dropdown as BSDropdown } from "react-bootstrap";

// AddToCalendar Imports
import {
  buildShareUrl,
  isInternetExplorer,
} from "react-add-to-calendar-hoc/lib/utils";
import { SHARE_SITES } from "react-add-to-calendar-hoc/lib/enums";

function handleOnClick(e) {
  var filename = "filename";
  e.preventDefault();
  var url = e.currentTarget.getAttribute("href");

  if (url.startsWith("BEGIN")) {
    var blob = new Blob([url], {
      type: "text/calendar;charset=utf-8",
    });

    if ((0, isInternetExplorer)()) {
      window.navigator.msSaveOrOpenBlob(blob, "".concat(filename, ".ics"));
    } else {
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", "".concat(filename, ".ics"));
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } else {
    window.open(url, "_blank");
  }
}

const shareSiteToString = (shareSite) => {
  switch (shareSite) {
    case SHARE_SITES.GOOGLE:
      return "Google";
    case SHARE_SITES.ICAL:
      return "iCalendar";
    case SHARE_SITES.OUTLOOK:
      return "Outlook";
    case SHARE_SITES.YAHOO:
      return "Yahoo";
    default:
      return "?";
  }
};

const createDropdown = (event) => {
  const calLinks = [
    SHARE_SITES.GOOGLE,
    SHARE_SITES.ICAL,
    SHARE_SITES.OUTLOOK,
    SHARE_SITES.YAHOO,
  ].map((calType) => {
    return {
      site: calType,
      link: buildShareUrl(event, calType),
    };
  });

  return (
    <BSDropdown>
      <BSDropdown.Toggle variant="primary" id="dropdown-basic">
        Add to Calendar
      </BSDropdown.Toggle>

      <BSDropdown.Menu>
        {calLinks.map((cal, i) => (
          <BSDropdown.Item key={i} href={cal.link} onClick={handleOnClick}>
            {shareSiteToString(cal.site)}
          </BSDropdown.Item>
        ))}
      </BSDropdown.Menu>
    </BSDropdown>
  );
};

class AddToCalendarButton extends Component {
  state = {};
  render() {
    return createDropdown(this.props.event);
  }
}

export default AddToCalendarButton;
