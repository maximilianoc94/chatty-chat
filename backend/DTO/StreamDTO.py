class StreamDTO:
    def __init__(self, members):
        self.members = members
        self.muted_users = set()
        self.video_stopped_users = set()