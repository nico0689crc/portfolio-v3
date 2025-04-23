import ContainerCommon from "@/components/layouts/public/common/ContainerCommon";
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

import type { DictionaryType } from "@/types";
import CookieResetButton from "./components/CookieResetButton";

type CookiesPolicyViewProps = DictionaryType;

const CookiesPolicyView = (props: CookiesPolicyViewProps) => {
  const { dictionary } = props;

  return (
    <ContainerCommon
      sx={{
        py: 10
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {dictionary.pages.cookies_policy.title}
      </Typography>

      <Typography >
        {dictionary.pages.cookies_policy.description}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {dictionary.pages.cookies_policy.whatAreCookiesTitle}
      </Typography>
      <Typography>
        {dictionary.pages.cookies_policy.whatAreCookiesDescription}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {dictionary.pages.cookies_policy.typesOfCookiesTitle}
      </Typography>
      <ul>
        <li>
          <Typography
            dangerouslySetInnerHTML={{ __html: dictionary.pages.cookies_policy.necessaryCookies }}
          />
        </li>
        <li>
          <Typography
            dangerouslySetInnerHTML={{ __html: dictionary.pages.cookies_policy.analyticsCookies }}
          />
        </li>
      </ul>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {dictionary.pages.cookies_policy.cookiesUsedTitle}
      </Typography>
      <Table sx={{ mb: 5}}>
        <TableHead>
          <TableRow>
            <TableCell><strong>{dictionary.pages.cookies_policy.cookieName}</strong></TableCell>
            <TableCell><strong>{dictionary.pages.cookies_policy.cookiePurpose}</strong></TableCell>
            <TableCell><strong>{dictionary.pages.cookies_policy.cookieDuration}</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{dictionary.pages.cookies_policy.cookieConsentName}</TableCell>
            <TableCell>{dictionary.pages.cookies_policy.cookieConsentPurpose}</TableCell>
            <TableCell>{dictionary.pages.cookies_policy.cookieConsentDuration}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{dictionary.pages.cookies_policy.gaName}</TableCell>
            <TableCell>{dictionary.pages.cookies_policy.gaPurpose}</TableCell>
            <TableCell>{dictionary.pages.cookies_policy.gaDuration}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{dictionary.pages.cookies_policy.gidName}</TableCell>
            <TableCell>{dictionary.pages.cookies_policy.gidPurpose}</TableCell>
            <TableCell>{dictionary.pages.cookies_policy.gidDuration}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {dictionary.pages.cookies_policy.controlCookiesTitle}
      </Typography>
      <Typography gutterBottom>
        {dictionary.pages.cookies_policy.controlCookiesDescription}
      </Typography>

      <Typography gutterBottom>
        {dictionary.pages.cookies_policy.changeChoiceDescription}
      </Typography>

      <CookieResetButton>
        {dictionary.pages.cookies_policy.changeCookiesButton}
      </CookieResetButton>
    </ContainerCommon>
  )
}

export default CookiesPolicyView;