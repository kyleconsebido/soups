// https://next-auth.js.org/configuration/pages#error-codes
export type ErrorCode =
  | "Configuration"
  | "AccessDenied"
  | "Verification"
  | "Default"
  | "OAuthSignin"
  | "OAuthCallback"
  | "OAuthCreateAccount"
  | "EmailCreateAccount"
  | "Callback"
  | "OAuthAccountNotLinked"
  | "EmailSignin"
  | "CredentialsSignin"
  | "SessionRequired";

// Default error messages provided by NextAuth
export function getErrorMessage(errorCode: ErrorCode | string): string {
  switch (errorCode) {
    case "OAuthSignin":
    case "OAuthCallback":
    case "OAuthCreateAccount":
    case "EmailCreateAccount":
    case "Callback":
      return "An error occured. Try again later";
    case "OAuthAccountNotLinked":
      return "To confirm your identity, sign in with the same account you used originally";
    case "EmailSignin":
      return "An error occured. The e-mail could not be sent";
    case "CredentialsSignin":
      return "Sign in failed. Check the details you provided are correct";
    case "SessionRequired":
      return "Please sign in to access this page";
    case "Configuration":
    case "AccessDenied":
    case "Verification":
    case "Default":
    default:
      return "Unable to sign in";
  }
}
