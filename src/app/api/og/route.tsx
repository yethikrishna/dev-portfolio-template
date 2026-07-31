/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { DATA } from '@/data/resume';

/**
 * Dynamic OpenGraph image generator.
 * Template by Mynd Labs — https://myndlabs.tech
 */
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');

  if (title) {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '80px',
            backgroundColor: '#ffffff',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            borderBottom: '6px solid #000000',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '18px',
                  fontWeight: 700,
                }}
              >
                YR
              </div>
              <span style={{ color: '#000000', fontSize: '20px', fontWeight: 600 }}>
                Yethikrishna R
              </span>
            </div>
            <h1
              style={{
                fontSize: title.length > 50 ? '50px' : '62px',
                fontWeight: 800,
                color: '#000000',
                lineHeight: 1.1,
                margin: 0,
                maxWidth: '950px',
                letterSpacing: '-1.5px',
              }}
            >
              {title}
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#666666', fontSize: '20px' }}>
              myndlabs.tech
            </span>
            <span style={{ color: '#666666', fontSize: '20px' }}>
              Template by Mynd Labs
            </span>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundColor: '#ffffff',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Left section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px',
            flex: 1,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 800,
                color: '#000000',
                margin: 0,
                letterSpacing: '-2px',
                lineHeight: 1.1,
              }}
            >
              Yethikrishna R
            </h1>

            <p
              style={{
                fontSize: '26px',
                color: '#555555',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Founder of Mynd Labs. Building premium web experiences and developer tools.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '12px',
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              <span style={{ color: '#888888', fontSize: '18px' }}>
                myndlabs.tech
              </span>
            </div>
          </div>
        </div>

        {/* Right section — monogram avatar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '400px',
            backgroundColor: '#f5f5f5',
            borderLeft: '1px solid #e5e5e5',
          }}
        >
          <div
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              backgroundColor: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '72px',
              fontWeight: 800,
            }}
          >
            YR
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
