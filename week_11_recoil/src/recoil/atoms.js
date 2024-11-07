import { atom } from "recoil";
export const NetworkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const JobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});
export const MessagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});
export const NotificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});
