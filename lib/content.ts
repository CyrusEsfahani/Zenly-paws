export const NAV_LINKS = [
  { href: "/#story", label: "Our story" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#product", label: "The toy" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Fill it with something they love",
    body: "Add kibble or treats to the box. Let them watch — curiosity does most of the training.",
  },
  {
    step: "02",
    title: "They scratch to forage",
    body: "Paws work the sandpaper lid, sliders, and windows. Digging is the point, not a trick.",
  },
  {
    step: "03",
    title: "Nails file while they play",
    body: "Each scratch gently wears the nail. Meals last longer. You skip the clipper standoff.",
  },
] as const;

export const REVIEWS = [
  {
    quote:
      "This is the first nail solution our boy actually asks for. He hated clippers for years. Two days in, his nails were already softer at the tips — and dinner from the puzzle is now the highlight of his evening.",
    name: "Maya R.",
    detail: "Rescue mix parent",
    rating: 5,
  },
  {
    quote:
      "Mentally tiring in the best way. Our Lab will work this through a whole meal, and his nails stay from getting that sharp click on the hardwood. Durable enough that it still looks new after a year of daily use.",
    name: "James T.",
    detail: "Labrador parent",
    rating: 5,
  },
  {
    quote:
      "We tried grinders, treats, the whole desensitization plan. This just… became a game. I fill it, put it on the rug, and walk away. Nail care without the guilt is a quiet kind of relief.",
    name: "Priya S.",
    detail: "Anxious-pup household",
    rating: 5,
  },
  {
    quote:
      "Three dogs, one toy we keep rotating. The slow-feeder side is as useful as the file. It’s the rare Amazon-style gadget that earned a permanent spot in the living room.",
    name: "Elena M.",
    detail: "Multi-dog home",
    rating: 5,
  },
] as const;

export const FAQS = [
  {
    q: "Will this replace clipping forever?",
    a: "For many dogs it keeps front nails in a healthy range between grooms. Rear nails still often need walks or occasional trims. Think of it as a kinder daily habit — not a promise that clippers vanish overnight.",
  },
  {
    q: "How do I introduce it?",
    a: "Show the treats going in. Reward any paw contact at first. Most dogs start digging on their own within a session or two. A carpeted floor or a few extra suction cups help enthusiastic scratchers.",
  },
  {
    q: "Is the sandpaper safe?",
    a: "The pad is 80-grit and self-healing — scratch marks typically fade within a day. Dogs tend to stop when nails feel short. As with any toy, supervise early sessions and check paws if your dog is extra vigorous.",
  },
  {
    q: "How long do the discs last?",
    a: "With regular use, a disc usually lasts about four to five months. Replacement discs peel off in one piece and stick firmly, even with determined digging.",
  },
  {
    q: "What size dogs is it for?",
    a: "The toy is used by small, medium, and large dogs. Very tiny paws may need a little extra help at first; very powerful dogs may move it on slick floors — carpet or a non-slip mat helps.",
  },
  {
    q: "Do you ship outside Amazon?",
    a: "Yes. Checkout on this site is a direct order through Stripe. You’ll receive an email receipt and shipping details after payment. We still sell on Amazon if that’s easier for you.",
  },
] as const;
