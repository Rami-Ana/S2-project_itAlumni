
import type {ITestimonial}  from "../types/ITestimonial.ts";

export function getMockTestimonials(): ITestimonial[] {
  return [
    {
      id: 1,
      name: "Mikela",
      avatar: "src/assets/images/avatar_woman.png",
      rating: 3,
      message: "Thanks to IT Alumni I got the work of my dreams in the tech world with its incredible mentoring program."
    },
    {
      id: 2,
      name: "Laura",
      avatar: "src/assets/images/avatar_woman.png",
      rating: 5,
      message: "The community helped me connect with senior developers who guided me through my first job interviews."
    },
    {
      id: 3,
      name: "Sergio",
      avatar: "src/assets/images/avatar_man.png",
      rating: 4,
      message: "I found my current job thanks to the networking events. Highly recommended!"
    }
  ];
}


