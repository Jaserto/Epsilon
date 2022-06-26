import { TimeoutsType, PollIntervalsType } from "src/types/constants";

export const Timeouts: TimeoutsType = {
    online: 12
  };
  
export const PollIntervals: PollIntervalsType = {
  messages: 2 * 1000,
  profile: 1000,
  profileView: 1000,
  postView: 2 * 1000,
  interaction: 1000,
  notification: 2 * 1000,
  lastSeen: 10 * 1000,
  blockList: 1000
};