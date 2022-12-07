import { useState } from 'react'

import PageHeader from 'shared/PageHeader'
import PyFileUploader from 'shared/PyFileUploader'
import { usePageApi } from 'shared/hooks'

import ConsoleApi from './ConsoleApi'

export default function ConsolePage() {
    const consoleApi = usePageApi(ConsoleApi)
    
    const [consoleMessages, setConsoleMessages] = useState("")

    const resetConsole = () => setConsoleMessages("")
    const getConsoleMessages = async () => {
        const messages = await consoleApi.fetchMessages()
        setConsoleMessages(messages)
    }

    return <div className="ConsolePage">
        <PageHeader title="Python Test Console" />
        <PyFileUploader
            pageApi={consoleApi}
            onUploadStart={resetConsole}
            onUploadComplete={getConsoleMessages}
        />
        <br />
        <br />
        <br />
        <textarea value={consoleMessages} readOnly />
    </div>
}
