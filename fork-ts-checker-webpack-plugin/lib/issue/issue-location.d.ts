import type { IssuePosition } from './issue-position';
interface IssueLocation {
    start: IssuePosition;
    end: IssuePosition;
}
declare function compareIssueLocations(locationA?: IssueLocation, locationB?: IssueLocation): number;
declare function formatIssueLocation(location: IssueLocation): string;
export { IssueLocation, compareIssueLocations, formatIssueLocation };
