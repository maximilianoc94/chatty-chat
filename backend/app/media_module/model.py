class Media:
    def __init__(self, type_of, data):
        self.type_of = type_of
        self.data = data

    def __repr__(self):
        return f'<Media type: {self.type_of}>'
