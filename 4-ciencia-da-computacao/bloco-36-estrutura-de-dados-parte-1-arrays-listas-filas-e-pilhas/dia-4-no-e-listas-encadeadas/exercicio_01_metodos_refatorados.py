from node import Node


def insert_at(self, value, position):
    if position < 1:
        return self.insert_first(value)
    if position >= len(self):
        return self.insert_last(value)
    current_value = self.__get_node_at(position - 1)
    next_value = Node(value)
    next_value.next = current_value.next
    current_value.next = next_value
    self.__length += 1


def insert_last(self, value):
    if self.is_empty():
        return self.insert_first(value)

    new_last_value = Node(value)
    actual_last_value = self.__get_node_at(len(self) - 1)
    actual_last_value.next = new_last_value
    self.__length += 1


def remove_last(self):
    if len(self) <= 1:
        return self.remove_first()

    previous_to_be_removed = self.__get_node_at(len(self) - 2)
    value_to_be_removed = previous_to_be_removed.next

    previous_to_be_removed.next = None
    self.__length -= 1
    return value_to_be_removed


def remove_at(self, position):
    if position < 1:
        return self.remove_first()
    if position >= len(self):
        return self.remove_last()

    previous_to_be_removed = self.__get_node_at(position - 1)

    value_to_be_removed = previous_to_be_removed.next
    previous_to_be_removed.next = value_to_be_removed.next
    value_to_be_removed.next = None
    self.__length -= 1

    return value_to_be_removed


def get_element_at(self, position):
    value_returned = None
    value_to_be_returned = self.__get_node_at(position)
    if value_to_be_returned:
        value_returned = Node(value_to_be_returned.value)
    return value_returned
