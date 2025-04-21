'use client';

import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';

import { Image } from '@/components/ui/image';
import {
  Carousel,
  useCarousel,
  CarouselThumb,
  CarouselThumbs,
  CarouselArrowFloatButtons,
} from '@/components/ui/carousel';
import { Stack } from '@mui/material';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  images: string[];
};

export function ProjectCarousel({ images, sx, ...other }: Props) {
  const carousel = useCarousel({ thumbs: { slidesToShow: 'auto' } });

  const slides = images?.map((img) => ({ src: img })) || [];

  return (
    <Stack direction="column">
      <Box
        sx={[
          { mb: 2.5, borderRadius: 2, position: 'relative', bgcolor: 'white' },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <CarouselArrowFloatButtons
          {...carousel.arrows}
          options={carousel.options}
          slotProps={{ prevBtn: { sx: { left: 20 } }, nextBtn: { sx: { right: 20} } }}
          sx={{ borderRadius: '50%', color: 'action.active', bgcolor: 'white' }}
        />
        <Carousel
          carousel={carousel}
          sx={{ borderRadius: 2 }}
          slotProps={{ slide: { display: 'flex' } }}
        >
          {slides.map((slide) => (
            <Image
              key={slide.src}
              alt={slide.src}
              src={slide.src}
              ratio="1/1"
              disablePlaceholder
              sx={{ minWidth: 320 }}
            />
          ))}
        </Carousel>
      </Box>

      <CarouselThumbs
        ref={carousel.thumbs.thumbsRef}
        options={carousel.options?.thumbs}
        slotProps={{ disableMask: true }}
        sx={{ width: { xs: 1, sm: 360 } }}
      >
        {slides.map((item, index) => (
          <CarouselThumb
            key={item.src}
            index={index}
            src={item.src}
            selected={index === carousel.thumbs.selectedIndex}
            onClick={() => carousel.thumbs.onClickThumb(index)}
          />
        ))}
      </CarouselThumbs>
    </Stack>
  );
}
