export function renderTestimonialCard(name: string, avatar: string, rating: number, message: string) {
    return `
<article class="testimonial-card">
    <div class="testimonial-card__item">
        <img src="${avatar}" class="testimonial-card__img">
        <div class="testimonial-card__info">
            <h2 class="testimonial-card__name">${name}</h2>
            <p class="testimonial-card__rating">${renderStars(rating)}</p>
        </div>
    </div>
    <p class="testimonial-card__text">${message}</p>
</article>
`;
}

function renderStars(rating: number): string {
    switch (rating) {
        case 1:
            return `
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
      `;
        case 2:
            return `
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
      `;
        case 3:
            return`
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
      `;
        case 4:
            return `
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
      `;
        case 5:
            return`
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
      `;
        default:
            return `
            <i class="fa-solid fa-star" style="color:#F3C63F;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
            <i class="fa-solid fa-star" style="color:#F3F4F6;"></i>
      `;
    }
}