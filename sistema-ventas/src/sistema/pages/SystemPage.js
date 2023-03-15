

import { SystemLayout } from "../layout/SystemLayout"
import { NoteView } from "../views"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const SystemPage = () => {
  return (
    <SystemLayout>
      {/*<NothingSelectedView />*/}
      <NoteView/>
    </SystemLayout>
  )
}
 
