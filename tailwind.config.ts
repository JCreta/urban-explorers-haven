
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for our urban explorer theme
				urbex: {
					dark: '#1A1F2C',
					muted: '#403E43',
					accent: '#EA384C',
					amber: '#F5A623',
					teal: '#4ECDC4',
					rust: '#BF4342',
					cream: '#F1F0E8',
					concrete: '#D6D6D6',
					metal: '#7E7E7E'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.7s ease-out',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite'
			},
			backgroundImage: {
				'noise': "url('data:image/png;base64,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')",
				'distressed': "url('data:image/png;base64,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')"
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
