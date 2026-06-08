function generateRandomMessages(messages: string[]) {
  return () => {
    const length = messages.length;
    if (length === 0) throw new Error("message array is empty");

    const randomIndex = Math.floor(Math.random() * length);

    return messages[randomIndex];
  };
}

const inspiringMessages = [
  "کاری نداره واقعا",
  "ده برابرش رو میتونی انجام بدی",
  "بزن بریم سراغش",
  "مثل یه بازی بهش نگاه کن",
];

export const generateInspiringRandomMessage =
  generateRandomMessages(inspiringMessages);

const celebrationMessages = [
  "ایول - یه پله بالاتر!",
  "دیسیپلین قوی! آفرین",
  "مثل آب خوردن بود - بزن بریم بعدی",
  "عالی بود",
  "گل کاشتی",
];

export const generateCelebrationRandomMessage =
  generateRandomMessages(celebrationMessages);
