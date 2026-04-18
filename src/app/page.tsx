"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Utensils, Coffee, MapPin, Award, Smile, Car, Users, Clock, Truck, ShoppingBag, Beer } from "lucide-react";

export default function LemondePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Lemonde Kuzu Effect"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "Experience", id: "experience" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Reserve", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="A Refined Yet Relaxed Dining Experience in Ankara"
          description="Discover the art of lamb at Lemonde. Where premium cuts meet a cozy, modern atmosphere in the heart of Çankaya."
          tag="Premium Casual Dining"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Reserve a Table", href: "#contact" },
            { text: "View Menu", href: "#menu" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/meat-kebab-with-vegetables-table_140725-4821.jpg", imageAlt: "Exquisite grilled lamb specialty" },
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-arranging-dishware-table-restaurant_23-2147936226.jpg", imageAlt: "Modern cozy restaurant interior" },
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-jelly-delicious-dessert-plate_23-2148238722.jpg", imageAlt: "Artisanal dessert presentation" },
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/black-tea-armudu-glass-table_140725-2345.jpg", imageAlt: "Rich traditional Turkish tea service" },
            { imageSrc: "http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157791.jpg", imageAlt: "Elegant table setting in Çankaya" },
            { imageSrc: "http://img.b2bpic.net/free-photo/various-food-table-yoghurt-pot-top-view_141793-13215.jpg", imageAlt: "Warm breakfast spread" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Our Culinary Pillars"
          description="From sun-up to sundown, experience the perfect blend of traditional flavors and modern service."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Chef's Lamb Specialities",              description: "Slow-cooked to perfection, our signature lamb dishes are the centerpiece of our menu.",              bentoComponent: "reveal-icon",              icon: Utensils,
            },
            {
              title: "Artisanal Desserts & Tea",              description: "Finish your meal with our decadent homemade desserts and premium, aromatic tea selections.",              bentoComponent: "reveal-icon",              icon: Coffee,
            },
            {
              title: "Designed for Everyone",              description: "Whether it's a romantic dinner or a family breakfast, our space is warm, welcoming, and fully accessible.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/empty-table-chair_74190-3616.jpg", imageAlt: "Comfortable restaurant seating" },
                { imageSrc: "http://img.b2bpic.net/free-photo/restaurant-tables_1162-181.jpg", imageAlt: "Wheelchair-friendly layout" },
                { imageSrc: "http://img.b2bpic.net/free-photo/group-young-friends-having-wine-together_23-2148454148.jpg", imageAlt: "Friendly restaurant atmosphere" },
              ],
            },
          ]}
        />
        <FeatureCardTwentySix
          title="The Lemonde Menu"
          description="Explore our carefully curated selections designed for a premium, casual dining journey."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Download Full Menu", href: "#menu" }]}
          cardClassName="!h-auto aspect-video"
          features={[
            { title: "Breakfast", description: "Farm-fresh ingredients and artisanal breads.", imageSrc: "http://img.b2bpic.net/free-photo/eggs-with-sausage-plate-with-cup-tea-turkish-bagel-salad-top-view-white-surface_176474-6354.jpg", buttonIcon: Utensils },
            { title: "Signature Lamb", description: "Our premium, slow-roasted heritage lamb cuts.", imageSrc: "http://img.b2bpic.net/free-photo/oven-baked-rabbit-legs-with-potatoes-rosemary_2829-19534.jpg", buttonIcon: Utensils },
            { title: "Healthy Bowls", description: "Nutritious, colorful, and locally sourced salads.", imageSrc: "http://img.b2bpic.net/free-photo/healthy-salad-with-avocadolettucetomato-chickpeas-white-wooden-table_123827-31620.jpg", buttonIcon: Utensils },
            { title: "Gourmet Desserts", description: "A sweet escape with traditional flair.", imageSrc: "http://img.b2bpic.net/free-photo/crackers-cakes-inside-brown-plate-cream-rustic_140725-29947.jpg", buttonIcon: Utensils },
          ]}
        />
        <FeatureBento
          title="Your Comfort Matters"
          description="We've considered every detail to ensure your visit to Çankaya is seamless and stress-free."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Convenient Services",              description: "Enjoy our signature experience exactly how you want it, anywhere.",              bentoComponent: "3d-task-list",              title: "Service Modes",              items: [
                { icon: Utensils, label: "Dine-in Service", time: "Available" },
                { icon: ShoppingBag, label: "Easy Takeaway", time: "Fast" },
                { icon: Truck, label: "Home Delivery", time: "Reliable" },
              ],
            },
            {
              title: "Accessibility & Parking",              description: "We offer free on-site parking and full wheelchair accessibility throughout the restaurant.",              bentoComponent: "reveal-icon",              icon: Car,
            },
            {
              title: "Expert Service",              description: "Our attentive staff is dedicated to ensuring your meal is memorable and relaxed.",              bentoComponent: "reveal-icon",              icon: Smile,
            },
          ]}
        />
        <TestimonialCardFifteen
          testimonial="The atmosphere at Lemonde is unmatched. The lamb is tender and the staff truly treats you like family. It’s slightly on the premium side, but well worth it for a relaxing night out in Ankara."
          rating={5}
          author="— Aylin Demir, Local Business Owner"
          avatars={[{ src: "http://img.b2bpic.net/free-photo/adorable-young-female-with-dark-long-hair-dressed-striped-t-shirt-coffee-shop-drinks-fresh-juice-espresso_273609-2790.jpg", alt: "Guest" }]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="Our Commitment"
          description="We focus on the total experience – the taste, the music, and the service."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "quality", value: "100%", title: "Local Sourced", description: "Fresh ingredients from local Ankara farms", icon: Award },
            { id: "park", value: "Free", title: "Parking", description: "Secure on-site parking for all guests", icon: Car },
            { id: "access", value: "Full", title: "Accessible", description: "Welcoming for families and guests with mobility needs", icon: Users },
          ]}
        />
        <FaqBase
          title="Commonly Asked"
          description="Quick answers for your visit."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "Is parking available?", content: "Yes, we provide complimentary on-site parking for all our guests in Çankaya." },
            { id: "2", title: "Do you offer delivery?", content: "Absolutely. You can order our signature dishes directly through our website or preferred local delivery partners." },
            { id: "3", title: "Is the restaurant family-friendly?", content: "Yes! We provide baby chairs and a welcoming environment for families with children." },
            { id: "4", title: "Can I host a private event?", content: "We would love to help you celebrate. Please reach out to our team to discuss private dining options." },
          ]}
        />
        <ContactCTA
          tag="Visit Us"
          title="Plan Your Visit"
          description="Located in the heart of Çankaya. Come experience the Lemonde Kuzu Effect for yourself."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Reserve Table", href: "#contact" },
            { text: "Call Us", href: "tel:+905550000000" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Lemonde Kuzu"
          copyrightText="© 2025 Lemonde Kuzu Effect"
          columns={[
            { title: "Navigation", items: [{ label: "Menu", href: "#menu" }, { label: "Experience", href: "#experience" }, { label: "Contact", href: "#contact" }] },
            { title: "Services", items: [{ label: "Dine-in", href: "#" }, { label: "Takeaway", href: "#" }, { label: "Delivery", href: "#" }] },
            { title: "Contact", items: [{ label: "Çankaya, Ankara", href: "#" }, { label: "+90 555 000 0000", href: "tel:+905550000000" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}