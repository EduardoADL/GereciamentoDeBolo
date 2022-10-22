import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LandingPage } from './pages'

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<LandingPage />
		</MantineProvider>
	</StrictMode>,
)
